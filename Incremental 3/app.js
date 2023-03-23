const user1 = "Job Daniel, fecha alta: 2021-09-16"
const user5 = "Juan, fecha alta: 2021-05-01"
const user6 ="Jose, fecha alta: 2021-01-01"
const user14 = "Citlalli, fecha alta: 2021-03-15"
const user600 = "Maria, fecha alta: 2021-03-11"

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]


// Primer intento

// function mostrarDatos (data){ /// numero introducido 1
//     let userElegido= user+(data) /// user1 por ejemplo
//      alert (userElegido) //datos user1
// }


function mostrarDatos (data){
    alert ("Los datos del usuario con id: "+(id)+ ` son: ${data}`);
}

// Primer ejercio
do{
    id = prompt ("Indique el id del usuario que quieras consultar o FIN ");
    switch (id){
        case "1":
            mostrarDatos(user1);
            break;
        case "5":
            mostrarDatos(user5);
            break;
        case "6":
            mostrarDatos(user6);
            break;
        case "14":
            mostrarDatos(user14);
            break;
        case "600":
            mostrarDatos(user600);
            break
        case "FIN":
            break;
        default: 
            alert (" Por favor, ingrese solo 1, 5, 6, 14 o 600.\n Si quiere dejar de usar la app escriba FIN");
            break;
     }
}while (id!="FIN");





alert ("Segundo Ejercicio");


function monstrarMes (data){
    let mes = meses [data-1]
    alert (`Ese número de mes corresponde al mes de ${mes}`);
}

do{
    mes = prompt("Escribe el número de mes que quieras conocer como se escribe o FIN");
    
    if (mes > 12){
        alert ("Introduce un número válido o escribe FIN")
    }
    if (mes != "FIN"){
    monstrarMes(mes);
    }else{
        alert ("Fin del ejercicio")
    }
}while (mes!="FIN");
   