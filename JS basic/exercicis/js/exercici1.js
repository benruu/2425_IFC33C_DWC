var min = 1;
var max = 2;
var formula = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(formula)
if (formula == 1){
    window.alert('Es cara')
} else{
    window.alert('Es cruz')
}