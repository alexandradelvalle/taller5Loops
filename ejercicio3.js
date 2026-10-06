// Taller de bucles (loops) en JavaScript
// Recorriendo la app de Nequi con for, while, do…while, break, continue y bucles anidados

// Ejercicio 3 · El menú de la app

// 16. Crea ejercicio3.js. Reutiliza la activación de prompt-sync del ejercicio anterior.
const prompt = require('prompt-sync')();
// 17. Usa un bucle do…while: el bloque do se ejecuta primero, y la condición while se revisa al final.
// 18. Dentro del do: muestra las 4 opciones del menú y pide la opcion.
let opcion; 
do {
    console.log("\n=== MENÚ ===");
    console.log("1. Ver saldo");
    console.log("2. Enviar dinero");
    console.log("3. Recargar");
    console.log("4. Salir");
    
    opcion = Number(prompt("Elige una opción (1-4): "));
    // 19. Usa if (o varios) para reaccionar a cada opción con un mensaje distinto. Aún no hace falta que
    // "funcione" de verdad: basta con un mensaje por opción.
    if (opcion === 1) {
        console.log(`\n💰 Tu saldo actual es: 305000`);
    } else if (opcion === 2) {
        console.log("\n💸 Abriendo sección para enviar dinero...");
    } else if (opcion === 3) {
        console.log("\n📲 Cargando sección de recargas...");
    } else if (opcion === 4) {
        console.log("\n👋 Sesión cerrada exitosamente. ¡Gracias por usar Nequi!");
    } else {
        console.log("\n ⚠️  Opción no válida. Intenta de nuevo.");
    }
} while (opcion !== 4); // 20. La condición del while al final debe mantener el menú vivo mientras la opción no sea Salir.
// 21. Ejecuta con node ejercicio3.js y recorre el menú varias veces antes de salir.