let divs = document.querySelectorAll(".divs");
let colores = ['aquamarine', 'blue', 'red', 'gray'];

for (let i = 0; i < divs.length; i++) {
    divs[i].setAttribute("style", "background-color: " + colores[i] + ";");
}

