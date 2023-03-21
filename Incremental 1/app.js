var nombre = prompt("Indica tu nombre");
var apellido = prompt ("Indica tu primer apellido");
var anoNacimiento = parseInt(prompt ("Indica tu año de nacimiento"));
var numCursos = parseInt(prompt("Indica el número de cursos de programación realizados"));
var numCursos = numCursos + 1;

if (anoNacimiento <2000){
    console.log ("¿Estas seguro que eres un programador Junior?" );
}else {
    console.log (nombre + " " + apellido + " naciste en el año " + anoNacimiento + ". Has realizado " + numCursos + " cursos");
};