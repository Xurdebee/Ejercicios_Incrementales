/*
const url = "https://api.github.com/users/"
let resultado;
function getUser (id){
  let urlId= url + id;

  fetch(urlId)
    .then (response => response.json())
    .then (json=>{
      console.log(json)
      resultado=json

    })
    .catch (error=> {
      console.log ("Ocurrió un error al solicitar datos")
    })
}

getUser("Xurdebee")
console.log(resultado)
*/



const url = "https://randomuser.me/api/?"
let resultado;
function getUser (id){
  let urlId= url + id;

  fetch(urlId)
    .then (response => response.json())
    .then (json=>{
      console.log(json)
      resultado=json

    })
    .catch (error=> {
      console.log ("Ocurrió un error al solicitar datos")
    })
}

getUser("1")
console.log(resultado)