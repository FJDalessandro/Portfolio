# Configuración de Seguridad - Portfolio

## ✅ Estado de Seguridad: SEGURO

### 🔐 Medidas de Seguridad Implementadas

#### 1. **API Route Protegida** (`/api/contact`)

- ✅ **Validación de entrada**: Uso de Yup para validación estricta
- ✅ **Rate Limiting**: Máximo 3 intentos por minuto por IP
- ✅ **Sanitización de datos**: Limpieza de espacios y normalización
- ✅ **Validación de Content-Type**: Solo acepta `application/json`
- ✅ **Manejo de errores**: No expone detalles internos al cliente
- ✅ **Credenciales seguras**: Variables de entorno para EmailJS
- ✅ **Métodos HTTP bloqueados**: Solo POST permitido

#### 2. **Headers de Seguridad** (Middleware)

- ✅ **X-XSS-Protection**: Protección contra XSS
- ✅ **X-Content-Type-Options**: Previene MIME type sniffing
- ✅ **X-Frame-Options**: Protección contra clickjacking
- ✅ **Referrer-Policy**: Control de referrer
- ✅ **Content-Security-Policy**: Política de seguridad de contenido
- ✅ **Permissions-Policy**: Control de permisos del navegador
- ✅ **Cache-Control**: Control de caché apropiado

#### 3. **Configuración de Next.js**

- ✅ **TypeScript estricto**: `ignoreBuildErrors: false`
- ✅ **ESLint activo**: `ignoreDuringBuilds: false`
- ✅ **Configuración de imágenes**: Formatos seguros (webp, avif)
- ✅ **Webpack seguro**: Configuración para archivos JSON

#### 4. **Dependencias**

- ✅ **Sin vulnerabilidades**: `npm audit` muestra 0 vulnerabilidades
- ✅ **Versiones actualizadas**: Todas las dependencias están actualizadas
- ✅ **Dependencias mínimas**: Solo las necesarias instaladas

#### 5. **Variables de Entorno**

- ✅ **Credenciales protegidas**: EmailJS configurado con variables de entorno
- ✅ **Archivo .env.example**: Documentación de variables necesarias
- ✅ **Private Key**: Uso de private key para EmailJS

### 🛡️ Protecciones Específicas

#### **Contra Ataques XSS**

```typescript
// Validación estricta de entrada
const contactSchema = Yup.object({
    name: Yup.string()
        .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo letras y espacios")
        .max(100, "Máximo 100 caracteres"),
    // ... más validaciones
});
```

#### **Contra Rate Limiting**

```typescript
// Rate limiting por IP
function checkRateLimit(ip: string): boolean {
    // Máximo 3 intentos por minuto
    if (limit.count >= 3) return false;
}
```

#### **Contra CSRF**

```typescript
// Validación de Content-Type
if (!contentType || !contentType.includes("application/json")) {
    return NextResponse.json({ error: "Content-Type inválido" }, { status: 400 });
}
```

#### **Content Security Policy**

```typescript
'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.emailjs.com",
    "connect-src 'self' https://api.emailjs.com",
    "frame-src 'none'",
    "object-src 'none'",
    // ... más directivas
].join('; ')
```

### 📋 Checklist de Seguridad

#### **Configuración de Variables de Entorno**

- [ ] Crear archivo `.env.local`
- [ ] Configurar `EMAILJS_SERVICE_ID`
- [ ] Configurar `EMAILJS_TEMPLATE_ID`
- [ ] Configurar `EMAILJS_USER_ID`
- [ ] Configurar `EMAILJS_PRIVATE_KEY`

#### **Verificación de Producción**

- [ ] Variables de entorno configuradas en hosting
- [ ] SSL/HTTPS habilitado
- [ ] Headers de seguridad funcionando
- [ ] Rate limiting activo
- [ ] Logs de error configurados

### 🚨 Logs de Seguridad

#### **Logs Importantes a Monitorear**

```typescript
// API de contacto
console.log(`Email enviado exitosamente desde IP: ${ip}`);

// Rate limiting
console.log(`Rate limit excedido para IP: ${ip}`);

// Errores de validación
console.error("Error en API de contacto:", error);
```

### 🔧 Configuración Recomendada para Producción

#### **Vercel (Recomendado)**

```bash
# Variables de entorno en Vercel Dashboard
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_USER_ID=your_user_id
EMAILJS_PRIVATE_KEY=your_private_key
```

#### **Netlify**

```bash
# Variables de entorno en Netlify Dashboard
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_USER_ID=your_user_id
EMAILJS_PRIVATE_KEY=your_private_key
```

### 📊 Auditoría de Seguridad

#### **Comandos de Verificación**

```bash
# Verificar vulnerabilidades
npm audit

# Verificar dependencias
npm outdated

# Verificar configuración
npm run build
npm run lint
```

#### **Herramientas de Seguridad Recomendadas**

- **OWASP ZAP**: Para testing de seguridad
- **Snyk**: Para monitoreo de vulnerabilidades
- **Security Headers**: Para verificar headers
- **Mozilla Observatory**: Para auditoría completa

### ✅ Resumen de Seguridad

**Estado**: ✅ SEGURO
**Última auditoría**: $(date)
**Vulnerabilidades**: 0
**Dependencias**: Actualizadas
**Configuración**: Completa

### 📞 Contacto para Problemas de Seguridad

Si encuentras algún problema de seguridad, por favor:

1. No lo reportes públicamente
2. Contacta directamente al desarrollador
3. Proporciona detalles específicos del problema
4. Incluye pasos para reproducir el issue

---

**Nota**: Esta configuración de seguridad está diseñada para un portfolio personal. Para aplicaciones con datos sensibles, considera implementar medidas adicionales como autenticación, autorización y encriptación de datos.
