//likes nfotos, un ingreso por foto.
//Sumar likes y mostrar en consola
//mostrar cantidad fotos con >10 likes

// pedir número likes fotografia o salir
    // añadir a lista
    //mostrar total likes lista
    //mostrar suma likes lista
    //Mostrar cantidad elementos lista>10

const listaLikes = [];
let anadirLikes;
let fotosMenosLikes=0;

do {
    anadirLikes = prompt("Indica número de likes de la fotografía");
    if (anadirLikes != "Salir"){
        listaLikes.push (parseInt(anadirLikes));
        console.log (listaLikes);
            if (anadirLikes < 10){
            fotosMenosLikes = fotosMenosLikes +1;
            console.log (fotosMenosLikes);
            }
        var sumaLista = listaLikes.reduce ((a,b)=> a+b,0);
        console.log (sumaLista);
    }else{
        alert ("Tienes un total de " + sumaLista + " likes");
        alert ("Tienes " + fotosMenosLikes + " fotografías con menos de 10 likes");
    }
}while (anadirLikes != "Salir");




// do{
//     valorIngresado = prompt ("Ingrese el número de likes o Salir para finalizar el recuento")
//     if (valorIngresado != "Salir"){
//         sumaNumerica = sumaNumerica + parseInt(valorIngresado)
//         console.log (sumaNumerica)
//     }else{
//         alert("Fin primer ejercicio")
//     }

// }while (valorIngresado != "Salir")