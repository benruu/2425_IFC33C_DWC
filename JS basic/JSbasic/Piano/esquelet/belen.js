function Nota(nom, tipus) {
    this.nom = nom;
    this.tipus = tipus;
}

function addCerca(nom, tipus) {
    let novaNota = new Nota(nom, tipus);
    cerca.push(novaNota);
}

function Partitura(nombre, melodia) {
    this.nombre = nombre;
    this.melodia = melodia;
}

let partituras = [];

let cerca = [];

addCerca("Do", "");
addCerca("Re", "");
addCerca("Mi", "");
addCerca("Fa", "");

let melodiaLaBalaguera = [
    new Nota("Do", ""),
    new Nota("Re", ""),
    new Nota("Mi", ""),
    new Nota("Fa", ""),
    new Nota("Fa", ""),
    new Nota("Sol", ""),
    new Nota("Sol", ""),
    new Nota("La", "#"),
    new Nota("La", "#")
];

let partituraLaBalaguera = new Partitura("La Balaguera", melodiaLaBalaguera);
partituras.push(partituraLaBalaguera);

let melodiaHappyBirthday = [
    new Nota("Do", ""),
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
    new Nota("Fa", "")
];

let partituraHappyBirthday = new Partitura("Happy Birthday", melodiaHappyBirthday);
partituras.push(partituraHappyBirthday);

console.log(partituras);

function cercador(partituras, cerca) {
    let resultado = [];
    
    for (let i = 0; i < partituras.length; i++) {
        let trobat = false;
        
        for (let j = 0; j < partituras[i].melodia.length; j++) {
            let encontrado = true;
            
            for (let k = 0; k < cerca.length; k++) {
                if (
                    partituras[i].melodia[j + k] === undefined ||
                    partituras[i].melodia[j + k].nom !== cerca[k].nom ||
                    partituras[i].melodia[j + k].tipus !== cerca[k].tipus
                ) {
                    encontrado = false;
                    break;
                }
            }
            
            if (encontrado) {
                trobat = true;
                break;
            }
        }
        
        if (trobat) {
            resultado.push(partituras[i]);
        }
    }
    
    return resultado;
}

let resultados = cercador(partituras, cerca);
console.log(resultados);


/*function cercador (partituras, cerca){
    let resultado = [];

    for (let partitura of partituras){
        let trobat = true;

        for (let nota of partitura.melodia){
            
            for (let notaCerca of cerca){
                
                if (){
                    trobat = false;
                }
                
            }            
        }

        if (trobat){
            resultado.push(partitura);
        }
    }
}*/