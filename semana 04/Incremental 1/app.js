var botonLikes = document.getElementById ("boton_likes");
var totalLikes = document.getElementById ("total_likes");

let cuentaLikes = 5; //likes ya acumulados en la publicación
totalLikes.textContent = cuentaLikes + " Me gusta";
let i="0"

boton_likes.addEventListener("click", () => {
    if (i == 0) { 
    i++
    cuentaLikes++;
    totalLikes.textContent = cuentaLikes + " Me gusta";
    botonLikes.style.backgroundColor = "#3FBEE7"
    }
    else{
        i--
        cuentaLikes--;
        totalLikes.textContent = cuentaLikes + " Me gusta";
        botonLikes.style.backgroundColor = ""
     }
});
