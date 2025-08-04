# Guía de Solución de Problemas - Portfolio

## Problemas Comunes y Soluciones

### 1. Errores 500 en el servidor

**Síntomas:**

- Página en blanco
- Errores 500 en la consola del navegador
- Servidor no responde correctamente

**Soluciones:**

#### Opción A: Limpieza Manual

```bash
# Detener todos los procesos de Node.js
taskkill /F /IM node.exe

# Eliminar archivos temporales
rm -rf .next
rm -rf node_modules
rm -rf .turbo

# Reinstalar dependencias
npm install

# Iniciar servidor
npm run dev
```

#### Opción B: Usar Script de Limpieza

```bash
# Ejecutar el script de limpieza automática
./clean-manual.bat
```

### 2. Problemas con el Cambio de Idioma

**Síntomas:**

- El botón de cambio de idioma no funciona
- Solo se muestra texto en inglés
- Errores de traducción
- Rutas duplicadas como `/en/en`

**Soluciones:**

1. **Verificar archivos de mensajes:**

    - Asegurarse de que `src/messages/es.json` y `src/messages/en.json` existan
    - Verificar que el formato JSON sea válido
    - Comprobar que todas las claves de traducción estén presentes en ambos archivos

2. **Verificar configuración de i18n:**

    - Revisar `src/i18n.ts` para asegurar que los locales estén correctamente definidos
    - Verificar que el middleware esté configurado correctamente en `src/middleware.ts`

3. **Verificar componente LanguageToggle:**

    - Asegurarse de que el componente esté importado correctamente en `Navbar.tsx`
    - Verificar que las traducciones se estén cargando correctamente
    - **SOLUCIONADO**: El problema de rutas duplicadas `/en/en` ha sido corregido

**Problema Específico Resuelto:**

- **Rutas duplicadas**: El botón generaba rutas como `/en/en` al cambiar de idioma
- **Causa**: Lógica incorrecta en la construcción de rutas en `LanguageToggle.tsx`
- **Solución**: Simplificación de la lógica para siempre navegar a la ruta raíz del nuevo locale
- **Archivo modificado**: `src/components/LanguageToggle.tsx`

### 3. Problemas de Configuración de Next.js

**Síntomas:**

- Errores de compilación
- Problemas con módulos
- Errores de TypeScript

**Soluciones:**

1. **Verificar next.config.js:**

    ```javascript
    const createNextIntlPlugin = require("next-intl/plugin");
    const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

    module.exports = withNextIntl({
        // Configuración adicional aquí
    });
    ```

2. **Verificar tsconfig.json:**
    - Asegurarse de que `resolveJsonModule` esté habilitado
    - Verificar que los paths estén configurados correctamente

### 4. Problemas de Dependencias

**Síntomas:**

- Errores de módulos no encontrados
- Problemas con next-intl
- Errores de versiones incompatibles

**Soluciones:**

1. **Actualizar dependencias:**

    ```bash
    npm update
    ```

2. **Verificar versiones compatibles:**

    - Next.js 15.4.4
    - next-intl 4.3.4
    - React 19.1.0

3. **Limpiar cache de npm:**
    ```bash
    npm cache clean --force
    ```

### 5. Verificación de Funcionamiento

**Comandos para verificar:**

```bash
# Verificar que el servidor esté funcionando
curl -I http://localhost:3000

# Verificar ruta en español
curl -I http://localhost:3000/es

# Verificar ruta en inglés
curl -I http://localhost:3000/en
```

**Respuestas esperadas:**

- `HTTP/1.1 307 Temporary Redirect` para la ruta raíz (redirige a /es)
- `HTTP/1.1 200 OK` para las rutas /es y /en

### 6. Logs de Depuración

**Archivos importantes para revisar:**

- `src/i18n.ts` - Configuración de internacionalización
- `src/middleware.ts` - Middleware de redirección
- `src/app/[locale]/layout.tsx` - Layout principal
- `src/components/LanguageToggle.tsx` - Componente de cambio de idioma

**Logs a buscar:**

- `🔧 [i18n.ts] Locale recibido:`
- `✅ [i18n.ts] Cargando mensajes para:`
- `📝 [layout.tsx] Mensajes cargados para`
- `🔄 Cambiando de [locale] a [newLocale]`

### 7. Correcciones Implementadas

**Cambios recientes:**

1. **Botón de cambio de idioma**: ✅ Corregido problema de rutas duplicadas
2. **Manejo de errores**: ✅ Mejorado en todos los componentes
3. **Configuración de Next.js**: ✅ Optimizada para next-intl
4. **Middleware**: ✅ Mejorada detección de locales
5. **Scripts de limpieza**: ✅ Actualizados para mejor mantenimiento

### 8. Contacto

Si los problemas persisten después de intentar estas soluciones, revisar:

1. Los logs del servidor en la consola
2. Los errores en la consola del navegador
3. La configuración del entorno de desarrollo
