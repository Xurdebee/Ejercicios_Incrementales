// los comentarios se ponen con doble barra
//Las variables Globales
var miPrimeraVariable = "Hola mundo"; //Tipo string
var variableNumerica = 125; //Tipo number
var variableBooleana = true; //Tipo Boolean (true o false) 

console.log("Muestro lo que quiero escribir"); //imprimir en pantalla "xxx"
console.log(miPrimeraVariable);

//Operadores matemáticos y de string
variableNumerica = variableNumerica + 1;
console.log(variableNumerica);

miPrimeraVariable = miPrimeraVariable + " Hola"
console.log (miPrimeraVariable)

//Condicionales
if (variableNumerica === 135) {
    console.log ("El valor es 135")
}else {
    console.log ("Error: El valor no es 135. Es " + variableNumerica)
};

if (typeof(miPrimeraVariable)=== "string"){
    alert( "la variable es de tipo String")
}else{
    alert( "La variable es de tipo numer")
};

if (typeof(miPrimeraVariable)=== "string" && miPrimeraVariable === "Hola mundo"){
    alert ("La variable cumple las dos variables")
}else {
    alert ("La variable no cumple los requisitos")
};


// App resumen
var nombre;
var apellido1;
    //prompt sirve para mostrar texto en pantalla
nombre = prompt ("¿Cual es tu nombre?");
apellido1 = prompt ("¿Cuales son tus apellidos?")

console.log(nombre+ " " + apellido1)

//Suma interactiva
var suma;

if (nombre === "Xurde"){
    //parseInt asigna al input el tipo number a los datos
    //let crea una variable que utiliza exclusivamente en el bloque de codigo donde se escribe
    let primerNumero = parseInt(prompt("¿Cual es el primer número a sumar?"))
    let segundoNumero = parseInt(prompt("Ahora dame el segundo número"))
    suma = primerNumero + segundoNumero
}else {
    alert("El nombre ha de ser Xurde")
};

console.log(suma)