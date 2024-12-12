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

    let iEditar = document.createElement("i");
    iEditar.className = "fa-solid fa-pen-to-square";

    let aEditar = document.createElement("a");
    aEditar.href = "#"
    aEditar.appendChild(document.createTextNode("Editar"));
    aEditar.style.marginRight = "10px";
    
    let iEliminar = document.createElement("i");
    iEliminar.className = "fa-solid fa-trash";

    let aElimnar = document.createElement("a");
    aElimnar.href = "#"
    aElimnar.appendChild(document.createTextNode("Eliminar"));
    aElimnar.addEventListener("click", () =>{
        const confirmar = confirm("Esta segur que vol eliminar aquesta partitura?");
        if (confirmar){
            alert("Partitura eliminada correctament!");
        } else {
            alert("Acció cancel·lada.")
        }
    })
    

    tdAccions.appendChild(iEditar);
    tdAccions.appendChild(aEditar);
    tdAccions.appendChild(iEliminar);
    tdAccions.appendChild(aElimnar);
    tr.appendChild(tdAccions);


    // Agregar la fila al cuerpo de la tabla
    tbody.appendChild(tr);

}

const login = document.getElementById("login");
login.addEventListener("click", () => {
    let width = 700;
    let height = 500;
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    let left = (screenWidth - width) / 2;
    let top = (screenHeight - height) / 2;
    console.log(`left: ${left}, top: ${top}, width: ${width}, height: ${height}`);
    window.open("./login.html", '_blank', `width=${width},height=${height},left=${left},top=${top}`);

})
