let alumnos = [
    {
        "Nombre": "Ruben",
        "Edad": 22,
        "Email": "rubenespinar@paucasesnovescifp.cat",
    },
    {
        "Nombre": "Hernan",
        "Edad": 19,
        "Email": "hernansandoval@paucasesnovescifp.cat"
    }
];

let body = document.querySelector("body");
let table = document.createElement("table");
let headerRow = document.createElement("tr");

let td1 = document.createElement('th'); 
td1.textContent = "Nombre";
headerRow.appendChild(td1);

let td2 = document.createElement('th'); 
td2.textContent = "Edad";
headerRow.appendChild(td2);

let td3 = document.createElement('th'); 
td3.textContent = "Email";
headerRow.appendChild(td3);

table.appendChild(headerRow);

for (let alumno of alumnos) {
    let row = document.createElement("tr"); 
    
    for (let x = 0; x < Object.values(alumno).length; x++) {
        let td = document.createElement("td"); 
        td.textContent = Object.values(alumno)[x]; 
        row.appendChild(td); 
    }
    
    table.appendChild(row); 
}

body.appendChild(table); 
