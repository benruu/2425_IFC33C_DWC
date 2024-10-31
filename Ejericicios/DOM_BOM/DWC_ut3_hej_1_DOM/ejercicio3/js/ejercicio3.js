const nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"];
let body = document.querySelector("body");
let ul = document.createElement("ul");
body.appendChild(ul);

for (let nom of nombres){
    let li = document.createElement("li");
    li.textContent = nom;
    ul.appendChild(li);
}