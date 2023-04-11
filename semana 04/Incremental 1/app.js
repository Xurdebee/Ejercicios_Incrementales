var botonLikes = document.getElementById ("boton_likes");
var totalLikes = document.getElementById ("total_likes");

let cuentaLikes = 3; //likes ya acumulados en la publicación
totalLikes.innerHTML = cuentaLikes + " Me gusta";
let i="0"

botonLikes.addEventListener("click", () => {
    if (i == 0) { 
    i++
    cuentaLikes++;
    // totalLikes.innerHTML = cuentaLikes + " Me gusta";
    botonLikes.style.backgroundColor = "#3FBEE7"
    }
    else{
        i--
        cuentaLikes--;
        // totalLikes.innerHTML = cuentaLikes + " Me gusta";
        botonLikes.style.backgroundColor = ""
     }
     totalLikes.innerHTML = cuentaLikes + " Me gusta";
});
