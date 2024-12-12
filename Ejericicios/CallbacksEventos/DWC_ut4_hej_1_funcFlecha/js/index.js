/** Ejercicio 1
 * ------------------------------------------
 */

pDinamic = () =>{
    const body = document.querySelector("body");
    const p = document.createElement("p");
    p.textContent = "Este es un párrafo dinámico";
    body.appendChild(p);
}

pDinamic();

/** Ejercicio 2
 * ------------------------------------------
 */


let nombres = ["Adria", "Ruben", "Josep", "Sebas"];

listaDinamica = (nombres) => {
    const body = document.querySelector("body");
    const ul = document.createElement("ul");
    nombres.sort(() => Math.random() - 0.5);
    
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });

    body.appendChild(ul)
}

listaDinamica(nombres)

/** Ejercicio 3
 * ------------------------------------------
 */


propiedadesWindow = () => {
    const body = document.querySelector("body");
    const pHeigth = document.createElement("p");
    pHeigth.textContent = window.innerHeight;
    body.appendChild(pHeigth)

    const pWidth = document.createElement("p");
    pWidth.textContent = window.innerWidth;
    body.appendChild(pWidth);
}

propiedadesWindow();

/** Ejercicio 4
 * ------------------------------------------
 */

const infoPersonas = [{nombre:"Laura", edad:20},{nombre:"Mario", edad:28},{nombre:"Oliver", edad:17},{nombre:"Kaka", edad:48}]


tablaFlecha = (infoPersonas) => {
    const body = document.querySelector("body");
    const table = document.createElement("table");
    

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

    infoPersonas.forEach(persona => {
        const row = document.createElement("tr");

        // Crear celdas para "Nombre" y "Edad"
        Object.values(persona).forEach(valor => {
            const td = document.createElement("td");
            td.textContent = valor;
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    body.appendChild(table);
};

tablaFlecha(infoPersonas);

/** Ejercicio 5
 * ------------------------------------------
 */


const texto = "Hola muy buenas  fdf criaturas";

const contarPalabras = (texto) => {
    // Dividir el texto por espacios y filtrar los elementos vacíos
    const palabras = texto.trim().split(/\s+/);
    const recuento = palabras.length;

    const p = document.createElement("p");
    p.textContent = `El texto tiene ${recuento} palabras.`;

    document.body.appendChild(p);
};

contarPalabras(texto);


/** Ejercicio 6
 * ------------------------------------------
 */

const tablaMultiplicar = (numero) => {
    const body = document.querySelector("body");
    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const tdOperacion = document.createElement("th");
    tdOperacion.textContent = "Operacion";
    headerRow.appendChild(tdOperacion);

    const tdResultado = document.createElement("th");
    tdResultado.textContent = "Resultado";
    headerRow.appendChild(tdResultado);

    thead.appendChild(headerRow);
    table.appendChild(thead);


    for (let x = 1; x < 11; x++){
        const tr = document.createElement("tr");

        const operacion = document.createElement("td");
        operacion.textContent= `${numero} * ${x}`;
        tr.appendChild(operacion);

        const resultado = document.createElement("td");
        resultado.textContent = (numero*x);
        tr.appendChild(resultado);

        table.appendChild(tr);
    
    }
    body.appendChild(table);
}

tablaMultiplicar(6);