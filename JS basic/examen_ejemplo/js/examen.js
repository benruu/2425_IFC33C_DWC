let jsonObj = {
    squadName: "Super hero squad", 
    homeTown: "Metro City",
    formed: 2020,
    secretBase: "Super tower",
    active: true,
    members: [
        {
            name: "Molecule Man",
            age: 29,
            secretIdentity: "Dan Jukes",
            powers: [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            name: "Madame Uppercut",
            age: 39,
            secretIdentity: "Jane Wilson",
            powers: [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            name: "Eternal Flame", 
            age: 1000000,
            secretIdentity: "Unknown",
            powers: [
                "Immortality", 
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
};

console.log("-------------------------------" + jsonObj.squadName.toUpperCase()+ "-------------------------------");
console.log("--------------- Ciudad Origen: "+ jsonObj.homeTown + " // Fecha origen: " + jsonObj.formed + "---------------");


for (member of jsonObj.members) {
    let nombre = "Nombre: " + member.name;
    let age = "Edad: " + member.age;
    let secretIdentity = "Identidad Secreta: " + member.secretIdentity;
    let poderes = "Poderes: " + member.powers.join(", ");
    

    let conjunto = nombre + "\n " + age + "\n " + secretIdentity + "\n " + poderes + 
    "\n -----------------------------------------------------------------------------";
    console.log(conjunto);
}


//----------------------------------EJERCICIO 3 ---------------------------------



let texto1 = "AMOR";
let texto2 = "MORA";

function anagramas(texto1, texto2){
    let anagrama = true;

    texto1Ordenado = texto1.split("").sort().join("").toLowerCase();
    texto2Ordenado = texto2.split("").sort().join("").toLowerCase();

    if (texto1Ordenado !== texto2Ordenado){
        anagrama = false;
        console.log("Falso")
    } else{
        console.log("Verdadero");
    
    }
    
} 

anagramas(texto1, texto2);

