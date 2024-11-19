function mostrarURLActual(){
    alert("La URL de la pagina es: "+ window.location.href)
}

function irAtras(){
    window.history.back()
}

function irAdelante(){
    window.history.forward()
}

function mostrarInfoNavegador(){
    alert("Name: " + window.navigator.appName + "\nLanguage: " + window.navigator.language + "\nOnline: "+ window.navigator.onLine)
    alert("Nombre: " + nombreNav)
}


function redirigirURL(){
    texto = document.getElementById("urlInput").value;
    location.assign(`${texto}`);
}

let newWindow;
function abrirPopup(){
    newWindow = window.open("https://www.w3schools.com","","width=900,height=600");
}


function cerrarPopup(){
    newWindow.close();
}
