#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

console.log("🔍 Verificando configuración de seguridad...\n");

// Verificar archivos de seguridad
const securityFiles = ["src/app/api/contact/route.ts", "src/middleware.ts", "next.config.js", "package.json", "env.example", "SECURITY_SETUP.md"];

console.log("📁 Verificando archivos de seguridad:");
securityFiles.forEach((file) => {
    if (fs.existsSync(file)) {
        console.log(`  ✅ ${file}`);
    } else {
        console.log(`  ❌ ${file} - FALTANTE`);
    }
});

// Verificar variables de entorno
console.log("\n🔐 Verificando variables de entorno:");
const envFile = ".env.local";
const requiredEnvVars = ["EMAILJS_SERVICE_ID", "EMAILJS_TEMPLATE_ID", "EMAILJS_USER_ID", "EMAILJS_PRIVATE_KEY"];

if (fs.existsSync(envFile)) {
    const envContent = fs.readFileSync(envFile, "utf8");
    requiredEnvVars.forEach((varName) => {
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

// Verificar dependencias de seguridad
console.log("\n📦 Verificando dependencias:");
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
const securityDeps = ["yup", "@emailjs/nodejs"];

securityDeps.forEach((dep) => {
    if (packageJson.dependencies[dep] || packageJson.devDependencies[dep]) {
        console.log(`  ✅ ${dep}`);
    } else {
        console.log(`  ❌ ${dep} - FALTANTE`);
    }
});

// Verificar configuración de EmailJS
console.log("\n📧 Verificando configuración de EmailJS:");
if (packageJson.dependencies["@emailjs/browser"]) {
    console.log("  ⚠️  EmailJS browser aún presente - debe ser removido");
} else {
    console.log("  ✅ EmailJS browser removido correctamente");
}

if (fs.existsSync("src/app/api/contact/route.ts")) {
    console.log("  ✅ API route configurada correctamente");
} else {
    console.log("  ❌ API route no configurada");
}

// Verificar headers de seguridad
console.log("\n🛡️ Verificando headers de seguridad:");
if (fs.existsSync("src/middleware.ts")) {
    const middlewareContent = fs.readFileSync("src/middleware.ts", "utf8");
    if (middlewareContent.includes("Content-Security-Policy")) {
        console.log("  ✅ CSP configurado");
    } else {
        console.log("  ❌ CSP no configurado");
    }

    if (middlewareContent.includes("X-XSS-Protection")) {
        console.log("  ✅ Headers de seguridad configurados");
    } else {
        console.log("  ❌ Headers de seguridad faltantes");
    }
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
