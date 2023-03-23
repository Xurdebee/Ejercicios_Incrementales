let amigos = new Array;

let nuevoAmigo;

do {
    nuevoAmigo = prompt ("Introduce el nombre de tu amig@: ");
    if (nuevoAmigo != null){
        amigos.push (nuevoAmigo);
        console.log (amigos);
        
    }else {
        alert("Veo que no te interesa introducir o no tienes más amigos.");
        amigos.sort();
        alert("Los nombres de tus amigos son: "+ amigos);
        amigos.forEach (data =>console.log(data))
    }
}while (nuevoAmigo != null);
alert("Gracias por usar la app.");


