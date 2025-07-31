# Configuración de Seguridad - Formulario de Contacto

## 🛡️ Medidas de Seguridad Implementadas

### 1. **API Route Protegida**

- ✅ Credenciales de EmailJS movidas al servidor
- ✅ Validación de datos con Yup
- ✅ Sanitización de inputs
- ✅ Rate limiting (3 intentos por minuto por IP)
- ✅ Verificación de Content-Type
- ✅ Bloqueo de métodos HTTP no permitidos

### 2. **Middleware de Seguridad**

- ✅ Headers de seguridad (XSS, CSRF, etc.)
- ✅ Content Security Policy (CSP)
- ✅ Protección contra bots y crawlers
- ✅ Verificación de origen de peticiones

### 3. **Validación y Sanitización**

- ✅ Validación del lado del servidor
- ✅ Límites de longitud en campos
- ✅ Expresiones regulares para caracteres permitidos
- ✅ Sanitización de datos antes del envío

## 🔧 Configuración Requerida

### 1. Crear archivo `.env.local`

Copia el archivo `env.example` y renómbralo a `.env.local`:

```bash
cp env.example .env.local
```

### 2. Configurar variables de entorno

Edita `.env.local` con tus credenciales reales:

```env
EMAILJS_SERVICE_ID=service_gl1u3h1
EMAILJS_TEMPLATE_ID=template_xc1eokk
EMAILJS_USER_ID=Jfy_SZdeshnAyVqBB
EMAILJS_PRIVATE_KEY=tu_clave_privada_aqui
```

### 3. Obtener la Private Key de EmailJS

1. Ve a [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navega a "Account" > "API Keys"
3. Genera una nueva Private Key
4. Copia la clave y pégala en `EMAILJS_PRIVATE_KEY`

## 🚀 Despliegue

### Variables de entorno en producción

Si usas Vercel, agrega las variables de entorno en:

1. Dashboard de Vercel
2. Settings > Environment Variables
3. Agrega las 4 variables de EmailJS

### Para otros proveedores

Asegúrate de configurar las variables de entorno en tu plataforma de hosting.

## 🔍 Monitoreo

### Logs de seguridad

La API registra:

- ✅ Intentos de envío exitosos (IP del remitente)
- ✅ Errores de validación
- ✅ Intentos de rate limiting
- ✅ Errores de configuración

### Verificación

Para verificar que todo funciona:

1. Inicia el servidor: `npm run dev`
2. Ve a la página de contacto
3. Envía un formulario de prueba
4. Verifica los logs en la consola del servidor

## ⚠️ Consideraciones Adicionales

### Para mayor seguridad en producción:

1. **Rate Limiting Avanzado**: Considera usar Redis para rate limiting distribuido
2. **CAPTCHA**: Agrega reCAPTCHA o hCaptcha para formularios públicos
3. **Monitoreo**: Implementa alertas para múltiples intentos fallidos
4. **Backup**: Configura un servicio de email alternativo

### Headers de seguridad adicionales:

El middleware ya incluye headers básicos. Para mayor seguridad, considera agregar:

- `Strict-Transport-Security` (HSTS)
- Headers personalizados de tu aplicación

## 🐛 Solución de Problemas

### Error: "EmailJS credentials not configured"

- Verifica que todas las variables de entorno estén configuradas
- Reinicia el servidor después de cambiar `.env.local`

### Error: "Demasiadas solicitudes"

- Espera 1 minuto antes de intentar nuevamente
- Verifica que no haya múltiples pestañas abiertas

### Error: "Acceso no permitido"

- Verifica que estés accediendo desde el dominio correcto
- En desarrollo, asegúrate de usar `localhost:3000`

## 📞 Soporte

Si encuentras problemas:

1. Revisa los logs del servidor
2. Verifica la configuración de EmailJS
3. Asegúrate de que las variables de entorno estén correctas
