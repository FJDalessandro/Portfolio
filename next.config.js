const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configuración de imágenes
    images: {
        formats: ["image/webp", "image/avif"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Configuración experimental
    experimental: {
        optimizeCss: false,
    },

    // Configuración de TypeScript
    typescript: {
        ignoreBuildErrors: false,
    },

    // Configuración de ESLint
    eslint: {
        ignoreDuringBuilds: false,
    },

    // Configuración de webpack para mejor manejo de módulos
    webpack: (config, { isServer }) => {
        // Configuración específica para el manejo de archivos JSON
        config.module.rules.push({
            test: /\.json$/,
            type: "json",
        });

        return config;
    },
};

module.exports = withNextIntl(nextConfig);
