let baraja = [];
let palos = ['clubs', 'diamonds', 'hearts', 'spades'];
let naipes = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', 'jack', 'queen', 'king'];
let trampa = false;

function trampas(){
     texto = prompt("Quieres hacer trampas?")

    if (texto === "SI"){
        trampa = true;
    } else {
        
    }

    
}

for (let palo of palos) {
    for (let naipe of naipes) {
        baraja.push(naipe + '_of_' + palo);
    }
}

function barajar_cartas() {
    baraja.sort(() => Math.random() - 0.5);
    
}

function jugar() {
    let div = document.querySelector("#cartas");
    div.innerHTML = ""; 
    let mano = [];
    barajar_cartas();

    
    for (let i = 0; i < 5; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", "././cards/" + baraja[i] + ".png");
        img.setAttribute("width", "250");
        img.setAttribute("height", "363");
        div.appendChild(img);

        mano.push(baraja[i].split('_')[0]); 
    }

    console.log(mano);

    
    let contador = {};
    let hayRepetido = false;
        for (let naipe of mano) {
            if (contador[naipe]) {
                contador[naipe]++;
                hayRepetido = true;
                break;
        } else {
            contador[naipe] = 1;
        }
        
        
    }
    console.log(contador);
    let txt = document.createElement('txt');
    div.appendChild(txt)

    let newWindow;
    if (trampa){
        document.querySelector('txt').innerHTML = "Has ganado";
        alert("El usuario esta haciendo trampas")
        newWindow = window.open("https://www.w3schools.com","","width=800,height=300");
    } else {
        if (hayRepetido) {
            document.querySelector('txt').innerHTML = "Has ganado";
        } else {
            document.querySelector('txt').innerHTML = "Has Perdido";
        }
    }
    
}
