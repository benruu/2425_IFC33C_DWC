document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('divElement').addEventListener('click', function(event) {
        console.log('div - Captura');
    }, true); 

    document.getElementById('sectionElement').addEventListener('click', function(event) {
        console.log('section - Captura');
    }, true); 

    document.getElementById('buttonElement').addEventListener('click', function(event) {
        console.log('button - Captura');
        event.stopPropagation();
    }, true); 

    document.getElementById('divElement').addEventListener('click', function(event) {
        console.log('div - Burbuja');
    }, false); 

    document.getElementById('sectionElement').addEventListener('click', function(event) {
        console.log('section - Burbuja');
    }, false); 

    document.getElementById('buttonElement').addEventListener('click', function(event) {
        console.log('button - Burbuja');
    }, false); 
});
