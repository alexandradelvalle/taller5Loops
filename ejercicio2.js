// Taller de bucles (loops) en JavaScript
// Recorriendo la app de Nequi con for, while, do…while, break, continue y bucles anidados

// Ejercicio 2 · Validar el PIN

// 9. Crea el archivo ejercicio2.js e instala prompt-sync como se explicó arriba.
const prompt = require('prompt-sync')();
// 10. Define el pinCorrecto (invéntate uno).
const pinCorrecto = 1234;
// 11. Pide el intento una primera vez con prompt.
let intento = Number(prompt("Escribe tu PIN: "));
// 12. Usa un bucle while que se repita mientras el intento sea distinto al PIN correcto.
// 13. Dentro del bucle: avisa que el PIN es incorrecto y vuelve a pedir el intento 
// (si no lo pides de nuevo, el bucle nunca cambia… piensa qué pasaría).
while (intento !== pinCorrecto) {
    console.log("PIN incorrecto");
    intento = Number(prompt("Escribe tu PIN de nuevo: "));
}
// 14. Cuando el usuario acierte, el bucle termina solo. Fuera del bucle, dale la bienvenida a la app.
console.log("Sesión iniciada correctamente. Bienvenido a Nequi");
// 15. Ejecuta con node ejercicio2.js y pruébalo fallando a propósito varias veces.