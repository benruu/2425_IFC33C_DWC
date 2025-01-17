
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("ej2");
    button.addEventListener("click", () => {
        alert("Has hecho click!");
        alert("Se ha cambiado el texto");
        button.innerText = "dd";
    })

    button.addEventListener('click', (event) => {
        document.getElementById("ej3").innerHTML = `Tipo de evento: ${event.type}`;
        console.log(`Tipo de evento: ${event.type}`);
        });
    
        
    let contador = 0;
    const buttonIncrement = document.getElementById("incrementar");
    buttonIncrement.addEventListener("click", () => {
        contador++;
        document.getElementById('contador').innerText = contador;
    })

    const buttonReset = document.getElementById("reset");
    buttonReset.addEventListener("click", () => {
        contador = 0;
        document.getElementById('contador').innerText = 0;
    })
    
    const elemento1 = document.getElementById("elemento1");
    const elemento2 = document.getElementById("elemento2");
    const elemento3 = document.getElementById("elemento3");

    
    elemento1.addEventListener("click", () => {
        alert(`Has hecho click en ${elemento1.innerHTML}`);
        elemento1.innerHTML = "Seleccionado";
    })
    elemento2.addEventListener("click", () => {
        alert(`Has hecho click en ${elemento2.innerHTML}`);
        elemento2.innerHTML = "Seleccionado";
    })
    elemento3.addEventListener("click", () => {
        alert(`Has hecho click en ${elemento3.innerHTML}`);
        elemento3.innerHTML = "Seleccionado";
    })
    
    
    
});

