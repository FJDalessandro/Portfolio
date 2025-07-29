@echo off
echo Limpiando caché de Next.js...
if exist .next rmdir /s /q .next
if exist node_modules\.cache rmdir /s /q node_modules\.cache
echo Caché limpiada exitosamente!
pause 