function Nota(nota, tipus){
    this.nota = nota;
    this.tipus = tipus;
}


function Partitura(nombre, idioma, melodia){
    this.nombre = nombre;
    this.idioma = idioma;
    this.melodia = melodia;
}

let partituras = [];

melodiaLaBalaguera = [new Nota("Do", ""),
    new Nota("Re", ""),
    new Nota("Mi", ""),
    new Nota("Fa", ""),
    new Nota("Fa", ""),
    new Nota("Sol", ""),
    new Nota("Sol", ""),
    new Nota("La", "#"),
    new Nota("La", "#"),
];

partituraLaBalaguera = new Partitura("La Balaguera", "ca", melodiaLaBalaguera);
partituras.push(partituraLaBalaguera);

melodiaHappyBirthday = [new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Re", ""),
    new Nota("Do", ""),
    new Nota("Fa", ""),
    new Nota("Mi", ""),
    new Nota("Do", ""),
    new Nota("Do", ""),
    new Nota("Re", ""),
    new Nota("Do", ""),
    new Nota("Sol", ""),
    new Nota("Fa", ""),   
];

partituraHappyBirthday = new Partitura("Happy Birthday", "en", melodiaHappyBirthday);
partituras.push(partituraHappyBirthday);

for (let x = 0; x < 98;x++){
    partituras.push(partituraLaBalaguera);
}

console.log(partituras);

let tbody = document.querySelector("tbody")


for (let i = 0; i < partituras.length; i++) {
    let partitura = partituras[i];
    let tr = document.createElement("tr");

    // Cambiar color de fondo de la fila
    if (i % 2 === 0) {
        tr.style.backgroundColor = "#f2f2f2"; 
    } else {
        tr.style.backgroundColor = "#e0e0e0"; 
    }


    let td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(partitura.nombre));

    let td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(partitura.idioma));


    tr.appendChild(td1);
    tr.appendChild(td2);

    let tdAccions = document.createElement("td");
    
    let aEditar = document.createElement("a");
    aEditar.href = "#"
    aEditar.appendChild(document.createTextNode("Editar"));

    let aElimnar = document.createElement("a");
    aElimnar.href = "#"
    aElimnar.appendChild(document.createTextNode("Eliminar"));

    tdAccions.appendChild(aEditar);
    tdAccions.appendChild(aElimnar);
    tr.appendChild(tdAccions);


    // Agregar la fila al cuerpo de la tabla
    tbody.appendChild(tr);

    
}
