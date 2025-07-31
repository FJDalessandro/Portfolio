import { NextRequest, NextResponse } from "next/server";
import * as Yup from "yup";

// Configuración de EmailJS (estas credenciales estarán en variables de entorno)
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = process.env.EMAILJS_USER_ID;

// Rate limiting simple (en producción usar Redis o similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Esquema de validación
const contactSchema = Yup.object({
    name: Yup.string()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(100, "El nombre no puede exceder 100 caracteres")
        .required("El nombre es requerido")
        .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras y espacios"),
    email: Yup.string().email("Email inválido").required("El email es requerido").max(254, "El email no puede exceder 254 caracteres"),
    subject: Yup.string()
        .min(5, "El asunto debe tener al menos 5 caracteres")
        .max(200, "El asunto no puede exceder 200 caracteres")
        .required("El asunto es requerido")
        .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s\-_.,!?()]+$/, "El asunto contiene caracteres no permitidos"),
    message: Yup.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(2000, "El mensaje no puede exceder 2000 caracteres").required("El mensaje es requerido"),
});

// Función para verificar rate limiting
function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const limit = rateLimitMap.get(ip);

    if (!limit || now > limit.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minuto
        return true;
    }

    if (limit.count >= 3) {
        // Máximo 3 intentos por minuto
        return false;
    }

    limit.count++;
    return true;
}

// Función para limpiar rate limit expirado
function cleanupRateLimit() {
    const now = Date.now();
    for (const [ip, data] of rateLimitMap.entries()) {
        if (now > data.resetTime) {
            rateLimitMap.delete(ip);
        }
    }
}

// Limpiar rate limit cada 5 minutos
setInterval(cleanupRateLimit, 5 * 60 * 1000);

export async function POST(request: NextRequest) {
    try {
        // Verificar método HTTP
        if (request.method !== "POST") {
            return NextResponse.json({ error: "Método no permitido" }, { status: 405 });
        }

        // Obtener IP del cliente
        const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown";

        // Verificar rate limiting
        if (!checkRateLimit(ip)) {
            return NextResponse.json({ error: "Demasiadas solicitudes. Intenta de nuevo en 1 minuto." }, { status: 429 });
        }

        // Verificar Content-Type
        const contentType = request.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            return NextResponse.json({ error: "Content-Type debe ser application/json" }, { status: 400 });
        }

        // Parsear el body
        const body = await request.json();

        // Validar datos con Yup
        try {
            await contactSchema.validate(body, { abortEarly: false });
        } catch (validationError: any) {
            return NextResponse.json(
                {
                    error: "Datos inválidos",
                    details: validationError.errors,
                },
                { status: 400 },
            );
        }

        // Sanitizar datos adicionales
        const sanitizedData = {
            name: body.name.trim(),
            email: body.email.trim().toLowerCase(),
            subject: body.subject.trim(),
            message: body.message.trim(),
        };

        // Verificar que las variables de entorno estén configuradas
        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_USER_ID) {
            console.error("EmailJS credentials not configured");
            return NextResponse.json({ error: "Error de configuración del servidor" }, { status: 500 });
        }

        // Enviar email usando EmailJS
        const emailjs = require("@emailjs/nodejs");

        const templateParams = {
            user_name: sanitizedData.name,
            user_email: sanitizedData.email,
            user_subject: sanitizedData.subject,
            user_message: sanitizedData.message,
        };

        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
            publicKey: EMAILJS_USER_ID,
            privateKey: process.env.EMAILJS_PRIVATE_KEY, // Usar private key para mayor seguridad
        });

        // Log del envío exitoso (sin datos sensibles)
        console.log(`Email enviado exitosamente desde IP: ${ip}`);

        return NextResponse.json({ message: "Mensaje enviado exitosamente" }, { status: 200 });
    } catch (error: any) {
        console.error("Error en API de contacto:", error);

        // No exponer detalles del error al cliente
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}

// Bloquear otros métodos HTTP
export async function GET() {
    return NextResponse.json({ error: "Método no permitido" }, { status: 405 });
}

export async function PUT() {
    return NextResponse.json({ error: "Método no permitido" }, { status: 405 });
}

export async function DELETE() {
    return NextResponse.json({ error: "Método no permitido" }, { status: 405 });
}
