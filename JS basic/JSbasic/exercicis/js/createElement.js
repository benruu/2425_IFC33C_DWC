class Marca {
    constructor(nombre) {
        this.nombre = nombre;
    }
}


class Coche {
    constructor(marca, modelo) {
        this.marca = marca; 
        this.modelo = modelo;
    }
}

var div = document.getElementById("miDiv"); 
var table = document.createElement("table"); 


var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
table.appendChild(thead);
table.appendChild(tbody);


var cabeceras = ["MARCA", "MODELO"];
var tr = document.createElement("tr");

var th;
for (let cabecera of cabeceras) {
    th = document.createElement("th");
    th.innerText = cabecera;
    tr.appendChild(th);
}


thead.appendChild(tr);


for (var i = 0; i < coches.length; i++) {
    var tr = document.createElement("tr"); 
    tbody.appendChild(tr);
    
    var tdMarca = document.createElement("td");
    var tdModelo = document.createElement("td");

    tdMarca.innerText = coches[i].marca.nombre; 
    tdModelo.innerText = coches[i].modelo; 

    tr.appendChild(tdMarca);
    tr.appendChild(tdModelo);
}


div.appendChild(table);

console.log(table);

