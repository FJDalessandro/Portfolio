# Portfolio Personal - Francisco D'Alessandro

Portfolio personal desarrollado con Next.js, React, TypeScript y Tailwind CSS.

## 🚀 Tecnologías Utilizadas

- **Next.js 15.4.4** - Framework de React
- **React 19.1.0** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 3.4.17** - Framework de CSS
- **Formik** - Manejo de formularios
- **Yup** - Validación de esquemas
- **EmailJS** - Envío de emails desde el frontend

## ✨ Características

- **Diseño Responsivo** - Adaptable a todos los dispositivos
- **Tema Oscuro Moderno** - Interfaz elegante y profesional
- **Navegación Suave** - Scroll animado entre secciones
- **Formulario de Contacto Funcional** - Integrado con EmailJS
- **Optimización SEO** - Metadatos completos
- **Deploy Automático** - Configurado para Vercel

## 📋 Secciones

1. **Inicio/About Me** - Descripción personal y habilidades
2. **Proyectos** - Portfolio de trabajos realizados
3. **Experiencia** - Timeline de experiencia laboral
4. **Contacto** - Formulario de contacto y redes sociales

```

## 🎨 Personalización

### Colores del Tema:

- **Fondo**: Gradiente oscuro con imagen de fondo
- **Acentos**: Cyan (#06b6d4)
- **Texto**: Blanco y grises

### Componentes Modificables:

- **AboutMe.tsx** - Información personal
- **Projects.tsx** - Proyectos y enlaces
- **Experience.tsx** - Experiencia laboral
- **Contact.tsx** - Información de contacto

## 📧 Configuración de Email

El formulario de contacto está integrado con EmailJS:

### Credenciales:

- **Service ID**: `service_gl1u3h1`
- **Template ID**: `template_xc1eokk`
- **User ID**: `Jfy_SZdeshnAyVqBB`

### Variables del Template:

- `{{user_name}}` - Nombre del remitente
- `{{user_email}}` - Email del remitente
- `{{user_subject}}` - Asunto del mensaje
- `{{user_message}}` - Contenido del mensaje

## 🔧 Configuración de Tailwind CSS

El proyecto usa Tailwind CSS v3.4.17 para compatibilidad con Vercel:

```javascript
// tailwind.config.js
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
```

## 📱 Responsive Design

El portfolio está optimizado para:

- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🚀 Optimizaciones

- **Imágenes optimizadas** con Next.js Image
- **Lazy loading** de componentes
- **CSS purgado** automáticamente
- **Bundle splitting** optimizado

## 📞 Contacto

- **Email**: franciscojdalessandro@gmail.com
- **LinkedIn**: [Francisco D'Alessandro](https://www.linkedin.com/in/francisco-dalessandro)
- **GitHub**: [FJDalessandro](https://github.com/FJDalessandro)
- **X (Twitter)**: [@fjdalessandro](https://x.com/fjdalessandro)

---

**Desarrollado por Francisco D'Alessandro**
