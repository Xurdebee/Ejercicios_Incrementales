
let numEjercicio = parseInt (prompt ("Elije que ejercicio quieres ejecutar:\n 1- Ejercicio 1 \n 2- Ejercicio 2 \n 3- Ejercicio 3 \n 4- Ejercicio 4"));
console.log (numEjercicio)

function selectorEjercicio (data){
    
    do {
        // numEjercicio = parseInt (prompt ("Elije que ejercicio quieres ejecutar:\n 1- \n 2- \n 3- \n 4-"));
        switch (numEjercicio){
            case 1:
                console.log ("1 respuesta");
                ejercicio1;
                break;

            case 2:
                console.log ("2 respuesta");
                ejercicio2;
                break;

            case 3:
                console.log ("3 respuesta")
                ejercicio3
                break

            case 4:
                console.log ("4 respuesta")
                ejercicio4
                break

            case null:
                alert ("Ningún ejercicio elegido")
                console.log ("Ningún ejercicio elegido")

            case "default":
                alert ("Introduce 1, 2, 3 o 4")
                console.log ("Introduce 1, 2, 3 o 4")
                break
        }
    }while (numEjercicio != null)
    alert ("Gracias por usar la app")
}

selectorEjercicio (numEjercicio);