# Configuración de Internacionalización (i18n) - next-intl

## 🌍 **Configuración Implementada**

### 1. **Dependencias Instaladas**

- ✅ `next-intl` - Biblioteca de internacionalización para Next.js

### 2. **Estructura de Archivos**

```
├── i18n.ts                    # Configuración principal de i18n
├── messages/
│   ├── es.json               # Traducciones en español
│   └── en.json               # Traducciones en inglés
├── src/app/
│   ├── [locale]/             # Rutas dinámicas por idioma
│   │   ├── layout.tsx        # Layout con soporte i18n
│   │   └── page.tsx          # Página principal
│   └── page.tsx              # Redirección a idioma por defecto
└── src/middleware.ts         # Middleware combinado (i18n + seguridad)
```

### 3. **Idiomas Soportados**

- 🇪🇸 **Español** (`es`) - Idioma por defecto
- 🇺🇸 **Inglés** (`en`)

## 🔧 **Configuración Técnica**

### 1. **next.config.js**

```javascript
const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl(nextConfig);
```

### 2. **i18n.ts**

```typescript
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["es", "en"] as const;
export const defaultLocale: Locale = "es";

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale as Locale)) notFound();
    return {
        messages: (await import(`./messages/${locale}.json`)).default,
    };
});
```

### 3. **Middleware Combinado**

- ✅ Middleware de i18n para manejo de rutas
- ✅ Middleware de seguridad para protección
- ✅ Redirección automática al idioma por defecto

## 📝 **Uso en Componentes**

### 1. **Componentes del Cliente (Client Components)**

```typescript
"use client";
import { useTranslations } from 'next-intl';

const MyComponent = () => {
    const t = useTranslations('section');

    return <h1>{t('title')}</h1>;
};
```

### 2. **Componentes del Servidor (Server Components)**

```typescript
import { getTranslations } from 'next-intl/server';

const MyServerComponent = async () => {
    const t = await getTranslations('section');

    return <h1>{t('title')}</h1>;
};
```

### 3. **Selector de Idioma**

```typescript
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const LanguageToggle = () => {
    const locale = useLocale();
    const router = useRouter();

    const handleLanguageChange = (newLocale: string) => {
        const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
        router.push(`/${newLocale}${pathWithoutLocale}`);
    };

    return (
        <select value={locale} onChange={(e) => handleLanguageChange(e.target.value)}>
            <option value="es">🇪🇸 Español</option>
            <option value="en">🇺🇸 English</option>
        </select>
    );
};
```

## 🗂️ **Estructura de Traducciones**

### 1. **Organización por Secciones**

```json
{
    "nav": {
        "home": "Inicio",
        "about": "Sobre mí"
    },
    "hero": {
        "greeting": "¡Hola! Soy",
        "title": "Desarrollador Full Stack"
    },
    "contact": {
        "title": "Contacto",
        "form": {
            "name": "Nombre",
            "email": "Email"
        },
        "validation": {
            "nameRequired": "El nombre es requerido"
        }
    }
}
```

### 2. **Traducciones Comunes**

```json
{
    "common": {
        "loading": "Cargando...",
        "error": "Error",
        "success": "Éxito",
        "language": "Idioma"
    }
}
```

## 🚀 **URLs y Rutas**

### 1. **Estructura de URLs**

- `/es` - Página principal en español
- `/en` - Página principal en inglés
- `/es/contact` - Sección de contacto en español
- `/en/contact` - Sección de contacto en inglés

### 2. **Redirección Automática**

- `/` → `/es` (idioma por defecto)
- URLs inválidas → 404

## 🔄 **Migración de Componentes**

### 1. **Antes (Context API)**

```typescript
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const { language } = useLanguage();
const t = translations[language];
return <h1>{t.nav.about}</h1>;
```

### 2. **Después (next-intl)**

```typescript
import { useTranslations } from 'next-intl';

const t = useTranslations('nav');
return <h1>{t('about')}</h1>;
```

## 📊 **Beneficios de la Nueva Implementación**

### 1. **Rendimiento**

- ✅ Carga estática de traducciones
- ✅ Optimización automática de bundles
- ✅ SSR/SSG compatible

### 2. **SEO**

- ✅ URLs específicas por idioma
- ✅ Meta tags dinámicos
- ✅ Sitemap automático

### 3. **Mantenibilidad**

- ✅ Estructura clara de traducciones
- ✅ Validación de tipos TypeScript
- ✅ Fácil agregar nuevos idiomas

### 4. **UX**

- ✅ Cambio de idioma instantáneo
- ✅ Persistencia de idioma
- ✅ Navegación fluida

## 🛠️ **Comandos Útiles**

### 1. **Verificar Configuración**

```bash
npm run build
```

### 2. **Desarrollo**

```bash
npm run dev
# Acceder a http://localhost:3000/es o http://localhost:3000/en
```

### 3. **Agregar Nuevo Idioma**

1. Agregar el locale en `i18n.ts`
2. Crear archivo `messages/[locale].json`
3. Actualizar traducciones

## 🔍 **Verificación**

### 1. **Probar Cambio de Idioma**

1. Navegar a `/es`
2. Cambiar idioma a inglés
3. Verificar que la URL cambie a `/en`
4. Verificar que el contenido se traduzca

### 2. **Probar Rutas**

- ✅ `/` → redirige a `/es`
- ✅ `/es` → muestra contenido en español
- ✅ `/en` → muestra contenido en inglés
- ✅ `/invalid` → muestra 404

## 📝 **Próximos Pasos**

### 1. **Optimizaciones**

- [ ] Agregar más idiomas si es necesario
- [ ] Implementar detección automática de idioma
- [ ] Agregar persistencia de idioma en localStorage

### 2. **Funcionalidades Avanzadas**

- [ ] Formateo de fechas por idioma
- [ ] Formateo de números por región
- [ ] Pluralización automática

### 3. **Monitoreo**

- [ ] Analytics por idioma
- [ ] Métricas de uso de idiomas
- [ ] Feedback de usuarios por idioma

## 🎯 **Resumen**

La implementación de i18n con `next-intl` proporciona:

- **Escalabilidad**: Fácil agregar nuevos idiomas
- **Rendimiento**: Optimización automática
- **SEO**: URLs específicas por idioma
- **UX**: Cambio de idioma fluido
- **Mantenibilidad**: Estructura clara y tipada

¡Tu portfolio ahora está completamente internacionalizado y listo para usuarios de diferentes idiomas!
