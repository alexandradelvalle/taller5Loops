// Taller de bucles (loops) en JavaScript
// Recorriendo la app de Nequi con for, while, do…while, break, continue y bucles anidados

// Ejercicio 5 · Varias cuentas a la vez

// 27.Crea ejercicio5.js con al menos 3 usuarios, cada uno con su propia lista de movimientos.
let usuarios = [
    { nombre: "Juan", movimientos: [500000, -20000, 10000] },
    { nombre: "Alexis", movimientos: [100000, -40000, -15000] },
    { nombre: "Melissa", movimientos: [20000, 0, -8000] }
];
// 28.Bucle de afuera: recorre usuarios con un for.
for (let i = 0; i < usuarios.length; i++) {
    let usuarioActual = usuarios[i];
    // 29.Dentro, por cada usuario, crea totalUsuario en 0. Piensa: ¿por qué debe reiniciarse a 0 en cada usuario y no una sola vez al principio?
    let totalUsuario = 0;
    // 30.Bucle de adentro: recorre los movimientos de ese usuario y ve sumándolos a totalUsuario.
    for (let j = 0; j < usuarioActual.movimientos.length; j++) {
        totalUsuario += usuarioActual.movimientos[j];
    }
    // 31.Al terminar el bucle de adentro (pero aún dentro del de afuera), muestra el nombre del usuario y su total.
    console.log(`👤 Usuario: ${usuarioActual.nombre} | 💰 Saldo Total: $${totalUsuario}`);
}
// 32.Ejecuta con node ejercicio5.js y verifica que cada usuario tenga su propio total.