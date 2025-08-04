@echo off
echo Limpiando archivos temporales y cache...

REM Detener procesos de Node.js si están ejecutándose
taskkill /F /IM node.exe 2>nul

REM Eliminar directorios temporales
if exist .next rmdir /s /q .next
if exist node_modules rmdir /s /q node_modules
if exist .turbo rmdir /s /q .turbo

REM Eliminar archivos de cache
if exist .eslintcache del .eslintcache
if exist .next-env.d.ts del .next-env.d.ts

REM Reinstalar dependencias
echo Reinstalando dependencias...
npm install

echo Limpieza completada.
echo Para iniciar el servidor, ejecuta: npm run dev
pause 