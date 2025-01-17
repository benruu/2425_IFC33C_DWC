document.addEventListener("DOMContentLoaded", () => {

    let data = [
        { "id": 1, "nombre": "Camisa", "precio": 20.99 },
        { "id": 2, "nombre": "Pantalón", "precio": 35.50 },
        { "id": 3, "nombre": "Zapatos", "precio": 50.00 }
    ]

    function listaProductos(data){

        let div = document.getElementById("table1");
        let table = document.createElement("table");

        // Crear encabezado de la tabla
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");

        // Columnas "Nombre" y "Edad"
        ["ID", "Nombre","Precio"].forEach(titulo => {
            const th = document.createElement("th");
            th.textContent = titulo;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Crear cuerpo de la tabla
        const tbody = document.createElement("tbody");

        data.forEach(producto => {
            let row = document.createElement("tr");
                
            Object.values(producto).forEach(valor => {
                let td = document.createElement("td");
                td.textContent = valor;
                row.appendChild(td); 
            }) 

            //let td = document.createElement("td");
            let button = document.createElement("button");
            button.textContent = "Background color";
            //td.appendChild(button)
            row.appendChild(button); 
            button.addEventListener("click", () => {
                row.style = ("background-color:rgb(0, 207, 7)")
                
            });

            tbody.appendChild(row)
        })
        table.appendChild(tbody);
        div.appendChild(table);
    }
    listaProductos(data);









    let puntuacion = [
        { "nombre": "Ana", "puntuacion": 650 },
        { "nombre": "Carlos", "puntuacion": 200 },
        { "nombre": "Beatriz", "puntuacion": 780 }
    ]
    
    function cargarPuntuacion(puntuacion) {
        let div = document.getElementById("table2");
        div.innerHTML = "";
        let table = document.createElement("table");
    
        // Crear encabezado de la tabla
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
    
        ["Nombre", "Score"].forEach(titulo => {
            const th = document.createElement("th");
            th.textContent = titulo;
            headerRow.appendChild(th);
        });
    
        thead.appendChild(headerRow);
        table.appendChild(thead);
    
        // Crear cuerpo de la tabla
        const tbody = document.createElement("tbody");
    
        puntuacion.forEach(valor => {
            let row = document.createElement("tr");
    
            Object.values(valor).forEach(valor => {
                let td = document.createElement("td");
                td.textContent = valor;
                row.appendChild(td);
            })
    
            tbody.appendChild(row)
        })
        table.appendChild(tbody);
        div.appendChild(table);
    }
    
    cargarPuntuacion(puntuacion);  // Cargar tabla inicial

    // Función para ordenar por puntuación (de mayor a menor)
    function ordenarPuntuacion() {
        puntuacion.sort((a, b) => b.puntuacion - a.puntuacion); // Ordenar de mayor a menor
        cargarPuntuacion(puntuacion); // Volver a renderizar la tabla
    }
    
    // Función para ordenar alfabéticamente por nombre
    function ordenarNombre() {
        puntuacion.sort((a, b) => a.nombre.localeCompare(b.nombre)); // Ordenar alfabéticamente por nombre
        cargarPuntuacion(puntuacion); // Volver a renderizar la tabla
    }
    
    // Crear botones después de cargar la tabla
    let div = document.getElementById("table2");
    let ordPuntuacion = document.createElement("button");
    ordPuntuacion.textContent = "Ordenar por Puntuación";
    ordPuntuacion.id = "scoreButton";
    let ordNombre = document.createElement("button");
    ordNombre.textContent = "Ordenar por Nombre";
    ordNombre.id = "nameButton";
    
    div.appendChild(ordPuntuacion);
    div.appendChild(ordNombre);
    
    // Obtener los botones y agregarles eventos después de haber sido creados
    ordPuntuacion.addEventListener("click", ordenarPuntuacion);
    ordNombre.addEventListener("click", ordenarNombre);
});

    