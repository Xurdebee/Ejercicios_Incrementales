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





var deleteAccount = document.getElementById ("eliminar");

let usuarios = ["David", "John"] 
console.log (usuarios)

deleteAccount.addEventListener ("click", () => {
  let confirmacion = confirm("Si elimina su cuenta no podrá recuperar sus publicaciones ni mensajes \n ¿Está conforme con esto?")
  if (deleteAccount != null){
    usuarios.pop();
  }

});