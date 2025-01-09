/** Ejercicio 1
 * ____________________________________________________________________________
 */

let numeros = [5, 6, 7, 8, 2, 3];

// Función para ordenar los números
function ordenarNumeros(numeros) {
    let numerosASC = [...numeros].sort((a, b) => a - b); // Copia y ordena ascendente
    let numerosDesc = [...numeros].sort((a, b) => b - a); // Copia y ordena descendente

    return { numerosASC, numerosDesc }; // Devuelve ambos resultados
}
// Ordenar los números
let { numerosASC, numerosDesc } = ordenarNumeros(numeros);

// Función para mostrar los números en el DOM
function mostrarNumeros(numeros, contenedor) {
    let div = document.querySelector(contenedor); // Selección del contenedor
    let ul = document.createElement("ul");

    numeros.forEach(numero => {
        let li = document.createElement("li");
        li.textContent = numero; 
        ul.appendChild(li);
    });

    div.appendChild(ul); 
}

// Mostrar números en el DOM
mostrarNumeros(numerosASC, "#ascendente"); // Mostrar ascendente
mostrarNumeros(numerosDesc, "#descendente"); // Mostrar descendente


/** Ejercicio 2
 * _____________________________________________________________________________
 */

let personas = [{nombre:"Pere",edad:43},{nombre:"Laura",edad:22},{nombre:"Joaquin",edad:35}]


function tablaEdad(personas){

    let ordenEdad = personas.sort((a, b) => a.edad - b.edad);

    let div = document.getElementById("table");
    let table = document.createElement("table");

    // Crear encabezado de la tabla
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    // Columnas "Nombre" y "Edad"
    ["Nombre", "Edad"].forEach(titulo => {
        const th = document.createElement("th");
        th.textContent = titulo;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Crear cuerpo de la tabla
    const tbody = document.createElement("tbody");

    ordenEdad.forEach(persona => {
        let row = document.createElement("tr");
        

        Object.values(persona).forEach(valor => {
            let td = document.createElement("td");
            td.textContent = valor;
            row.appendChild(td); 
        }) 

        tbody.appendChild(row)
    })
    table.appendChild(tbody);
    div.appendChild(table);
}

tablaEdad(personas);


let x = [1,2,3,4];
let cuadrados = []

x.forEach(numero => {
    cuadrados.push(numero*numero)
});

console.log(x);
console.log(cuadrados);

