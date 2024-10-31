const data = {
    "users": [
        { "name": "Juan", "age": 25 },
        { "name": "Ana", "age": 30 },
        { "name": "Pedro", "age": 20 }
    ]
};

for (user of data.users){
      console.log("Nombre: " + user.name + ", Edad: " + user.age);
};

console.log("-------------------------------------------------------");

let entero = "-1321-23";
let numero = true;

for (let x of entero) {
    if (isNaN(x) && x !== '-' && x !== '.') {  // Si el carácter no es número, '-' o '.'
        numero = false;
        break;  // Detenemos el bucle si encontramos algo que no sea un número
    }
}

if (numero) {
    console.log("Es un número válido");
} else {
    console.log("No es un número válido");
}

console.log("-------------------------------------------------------");

let tarjeta = 1800401957288143;
// Convertir el número a cadena para poder trabajar con él
let tarjetaStr = tarjeta.toString();

if (tarjetaStr.length === 15) {
    if (tarjetaStr.substring(0, 4) === "1800" || tarjetaStr.substring(0, 4) === "2131") {
        console.log("Tarjeta JBC válida");
    } else {
        console.log("Este número de tarjeta no es válido");
    }
} else if (tarjetaStr.length === 16) {
    if (tarjetaStr.substring(0, 2) === "35") {
        console.log("Tarjeta JBC válida");
    } else {
        console.log("Este número de tarjeta no es válido");
    }
} else {
    console.log("Este número de tarjeta no es válido");
}


console.log("-------------------------------------------------------");


let apalabrados = "apalabrados";
console.log(apalabrados);

console.log(apalabrados.split(""));

