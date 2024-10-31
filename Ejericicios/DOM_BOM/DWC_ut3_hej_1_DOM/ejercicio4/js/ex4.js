let body = document.querySelector("body");
let button = document.createElement("button");
button.textContent = "AMARILLOO!!!!";
let div = document.querySelector("div"); 

body.insertBefore(button, div); // Inserta el botón antes del div

button.addEventListener("click", cambiaFoto);
function cambiaFoto(){
    let img = document.querySelector("img");
    img.setAttribute("src","img/amarillo.png")
}
