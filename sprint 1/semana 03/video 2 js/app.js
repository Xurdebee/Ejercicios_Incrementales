const contador = 5;
let contadorInt = 0;
let valorIngresado = "Salir";
let sumaNumerica = 0;

//interaciones
for (let i = 0; i<contador; i++){
    console.log (contadorInt)
    contadorInt = contadorInt+1
};


//bucle mientras se cumpla la condición let valorIngresado = 0;
while (valorIngresado != "Salir"){
    valorIngresado = prompt ("Ingrese el número de likes o Salir para finalizar el recuento")
    if (valorIngresado != "Salir"){
        sumaNumerica = sumaNumerica + parseInt(valorIngresado)
        console.log(sumaNumerica)
    }

};

//bucle se realiza y se comprueba al final del mismo si continua let valorIngresado = "Salir";
do{
    valorIngresado = prompt ("Ingrese el número de likes o Salir para finalizar el recuento")
    if (valorIngresado != "Salir"){
        sumaNumerica = sumaNumerica + parseInt(valorIngresado)
        console.log (sumaNumerica)
    }else{
        alert("Fin primer ejercicio")
    }

}while (valorIngresado != "Salir")


//ejercicio repaso
// introducir n. pares, si es par se suma, y se muestra resultado.
//Si es impar muestra leyenda numeros introducidos
// Suma >100 stop y print error

let suma= 0;

do{
    valorIngresado = prompt ("introduce un número par o Salir para finalizar")
    if (valorIngresado != "Salir"){
        let numeroParseado = parseInt(valorIngresado)
        if (numeroParseado % 2 === 0){
            suma = suma + numeroParseado
            if (suma >= 100) {
                console.log("ERROR: 100 o más")
                break
            };
            alert("La suma actual es " + suma)
        } else {
            alert("El numero ingresado es IMPAR")
        };
    }else{
        alert("Fin segundo ejercicio")
    }
1
}while(valorIngresado != "Salir")