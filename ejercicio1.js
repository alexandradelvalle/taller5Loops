// Taller de bucles (loops) en JavaScript
// Recorriendo la app de Nequi con for, while, do…while, break, continue y bucles anidados

// Ejercicio 1 · Los movimientos del mes

// 1. Crea el archivo ejercicio1.js en tu carpeta del taller.
// 2. Declara la lista movimientos con al menos 6 valores (mezcla entradas y salidas de dinero).
let movimientos = [800000, -50000, 95000, -230000, -40000, 75000];
// 3. Antes del bucle, crea una variable total en 0 y otra cantidadRetiros en 0. 
// Piensa por qué deben empezar en 0.
let total = 0;
let cantidadRetiros = 0;
// 4. Usa un bucle for que recorra la lista desde la primera posición hasta la última.
// 5. Dentro del bucle, en cada vuelta suma el valor actual a total.
// 6. Sigue dentro del bucle: usa un if para preguntar si el movimiento es un retiro 
// (por ejemplo, si su valor es negativo). Si lo es, súmale 1 a cantidadRetiros.
for (let m of movimientos) {
    total += m;
    if (m < 0) {
        cantidadRetiros++
    }
}
// 7. Después del bucle (¡fuera de él!), muestra en consola el total y la cantidadRetiros.
console.log("=== MOVIMIENTOS DEL MES ===");
console.log(`Saldo actual: $${total}`);
console.log(`Cantidad de retiros realizados: ${cantidadRetiros}`);
//8. Ejecuta con node ejercicio1.js en la terminal y verifica los números a mano.