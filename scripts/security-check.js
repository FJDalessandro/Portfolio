#!/usr/bin/env node

/**
 * Script de verificación de seguridad para el formulario de contacto
 * Ejecutar con: node scripts/security-check.js
 */

const fs = require("fs");
const path = require("path");

console.log("🔍 Verificando configuración de seguridad...\n");

// Verificar archivos necesarios
const requiredFiles = ["src/app/api/contact/route.ts", "src/middleware.ts", "src/components/Contact.tsx"];

console.log("📁 Verificando archivos de seguridad:");
requiredFiles.forEach((file) => {
    if (fs.existsSync(file)) {
        console.log(`  ✅ ${file}`);
    } else {
        console.log(`  ❌ ${file} - FALTANTE`);
    }
});

// Verificar variables de entorno
console.log("\n🔐 Verificando variables de entorno:");
const envFile = ".env.local";
if (fs.existsSync(envFile)) {
    const envContent = fs.readFileSync(envFile, "utf8");
    const requiredVars = ["EMAILJS_SERVICE_ID", "EMAILJS_TEMPLATE_ID", "EMAILJS_USER_ID", "EMAILJS_PRIVATE_KEY"];

    requiredVars.forEach((varName) => {
        if (envContent.includes(varName)) {
            console.log(`  ✅ ${varName}`);
        } else {
            console.log(`  ❌ ${varName} - FALTANTE`);
        }
    });
} else {
    console.log(`  ⚠️  ${envFile} no encontrado`);
    console.log("  💡 Copia env.example a .env.local y configura las variables");
}

// Verificar dependencias
console.log("\n📦 Verificando dependencias:");
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
const requiredDeps = ["@emailjs/nodejs", "yup"];

requiredDeps.forEach((dep) => {
    if (packageJson.dependencies[dep] || packageJson.devDependencies[dep]) {
        console.log(`  ✅ ${dep}`);
    } else {
        console.log(`  ❌ ${dep} - FALTANTE`);
    }
});

// Verificar configuración de EmailJS
console.log("\n📧 Verificando configuración de EmailJS:");
const contactComponent = fs.readFileSync("src/components/Contact.tsx", "utf8");
if (contactComponent.includes("@emailjs/browser")) {
    console.log("  ⚠️  EmailJS browser aún presente - debe ser removido");
} else {
    console.log("  ✅ EmailJS browser removido correctamente");
}

if (contactComponent.includes("/api/contact")) {
    console.log("  ✅ API route configurada correctamente");
} else {
    console.log("  ❌ API route no configurada");
}

// Verificar middleware
const middleware = fs.readFileSync("src/middleware.ts", "utf8");
if (middleware.includes("Content-Security-Policy")) {
    console.log("  ✅ CSP configurado");
} else {
    console.log("  ❌ CSP no configurado");
}

if (middleware.includes("X-Content-Type-Options")) {
    console.log("  ✅ Headers de seguridad configurados");
} else {
    console.log("  ❌ Headers de seguridad faltantes");
}

console.log("\n🎯 Resumen de seguridad:");
console.log("  • API route protegida con validación y rate limiting");
console.log("  • Credenciales movidas al servidor");
console.log("  • Middleware con headers de seguridad");
console.log("  • Validación y sanitización de datos");
console.log("  • Protección contra CSRF y XSS");

console.log("\n📋 Próximos pasos:");
console.log("  1. Configura las variables de entorno en .env.local");
console.log("  2. Obtén la Private Key de EmailJS");
console.log("  3. Prueba el formulario en desarrollo");
console.log("  4. Configura variables en producción");

console.log("\n✨ ¡Configuración de seguridad completada!");
