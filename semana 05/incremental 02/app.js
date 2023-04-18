/* 
1 inicio
2 declarar variables
3 solicitar variables en una función.
4 leer variables con una función y comprobar que son distintas, si no, repetir punto 4.
    Cuando sean distintas:
        Si 1º es mayor que 2º y 3º: Mostrar "1º es el número mayor"
        Si 2º es mayor que 1º y 3º: Mostrar "2º es el número mayor"
        Si 3º es mayor que 1º y 2º: Mostrar "3º es el número mayor"
    Comprobar cual es número menor
FIN
*/

let a = 0;
let b = 0;
let c = 0;


function valores(){
    alert ("Introduzca 3 números distintos");
    a = parseInt(prompt("Valor primer numero"));
    b = parseInt(prompt("Valor segundo numero"));
    c = parseInt(prompt("Valor tercer numero"));
}


function valueCheker (){
    valores();
    while (a===b || a===c || b===c ){
        alert ("Introduce valores distintos");
        valores(); 
    }

    if (a>b && a>c){
        console.log(`El primer número (${a}), es el número mayor.`);
        return;
    }

    if (b>a && b>c){
        console.log(`El segundo número (${b}), es el número mayor.`);
        return;
    }

    else{
        console.log(`El tercer número (${c}), es el número mayor.`);
        return;
    }
    

}

valueCheker();
let minValue = Math.min(a, b, c);
console.log (`El valor más pequeño introducido es ${minValue}.`);