// Taller de bucles (loops) en JavaScript
// Recorriendo la app de Nequi con for, while, do…while, break, continue y bucles anidados

// Ejercicio 4 · Buscar y filtrar movimientos

// 22. Crea ejercicio4.js con una lista de movimientos variada (incluye algunos en 0 y algún pago a
// comercio).
let movimientos = [100000, -52000, 0, -22000, 45000];
let pagoComercioBuscado = -22000;
let posicionEncontrada = -1;
// 23. Recorre la lista con un for.
for (let i = 0; i < movimientos.length; i++) {
    let m = movimientos[i];
    // 24. Parte A — filtrar: al inicio de cada vuelta, usa un if que detecte si el movimiento es 0. Si lo es, usa
    // continue para saltarte esa vuelta.
    if (m === 0) {
        continue; 
    }
    // 25. Parte B — buscar: con otro if, detecta si el movimiento es el pago a comercio que buscas. Si lo es,
    // muestra su posición y usa break para detener el recorrido.
     if (m === pagoComercioBuscado) {
        posicionEncontrada = i;
        console.log(`🎯 El pago a comercio está en la posición: ${posicionEncontrada}`);
        break;
    }
}
// 26. Ejecuta con node ejercicio4.js. Cambia el orden de la lista y observa cómo cambia la posición encontrada.