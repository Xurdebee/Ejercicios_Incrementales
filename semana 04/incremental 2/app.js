var deleteAccount = document.getElementById ("eliminar");

let usuarios = ["David", "John"] 
console.log (usuarios)

deleteAccount.addEventListener ("click", () => {
  let confirmacion = confirm("Si elimina su cuenta no podrá recuperar sus publicaciones ni mensajes \n¿Está conforme con esto?")
  if (confirmacion){
    usuarios.pop();
    console.log (usuarios)
    window.open ("login.html")
  }else{
  alert("No has eliminado la cuenta.\nGracias por continuar con nosotros.")
  }

});
 
/*
function miCallback() {
  let confirmacion = confirm("Si elimina su cuenta no podrá recuperar sus publicaciones ni mensajes \n¿Está conforme con esto?")
  if (confirmacion == true ){
    usuarios.pop();
    console.log (usuarios)
    window.open ("login.html")
  }else{
  alert("No has eliminado la cuenta.\nGracias por continuar con nosotros.")
  }
}

deleteAccount.addEventListener ("click", miCallback);
*/