let partitures = [
    { nom: "La Balanguera", notes: ["DO", "RE", "MI", "FA", "FA", "SOL", "SOL", "LA#", "LA#"] },
    { nom: "Happy Birthday", notes: ["DO", "DO", "RE", "DO", "FA", "MI", "DO", "DO", "RE", "DO", "SOL", "FA"] }
];

var cerca = [];

var muestra = ['DO','RE'];

function Nota(nom, tipus) {
    this.nom = nom;
    this.tipus = tipus;
}

function addCerca(nom, tipus) {
    let novaNota = new Nota(nom, tipus);
    cerca.push(novaNota);
}

function cercador(){
    for (let i = 0; i < muestra.length; i++) {
        addCerca(muestra[i], "");
    }

    let cercaCadenes = "";
    for (let i = 0; i < cerca.length; i++) {
        cercaCadenes += cerca[i].nom + " ";
    }
    cercaCadenes = cercaCadenes.trim(); 

    let resultats = [];
    for (let i = 0; i < partitures.length; i++) {
        let partituraStr = "";
        for (let j = 0; j < partitures[i].notes.length; j++) {
            partituraStr += partitures[i].notes[j] + " ";
            
        }
        partituraStr = partituraStr.trim();
        
    
        if (partituraStr.indexOf(cercaCadenes) !== -1) {
            resultats.push(partitures[i].nom);
        }
    }

    if (resultats.length > 0) {
        console.log("Resultats de la cerca:", resultats);
    } else {
        console.log("Sense resultats.");
    }
}

cercador();