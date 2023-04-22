const express = require ("express");
const server = express();

server.get ("/demo", (req,res)=>{
	res.json("hola mundo");
});

server.listen(3000, ()=>{
	console.log("servidor activo");
});



let json = [
	{id:1, nombre: "Danilo", email: "danilo@tecla.academy" },
	{id:2, nombre: "Hugo", email: "hugo@tecla.academy"},
	{id:3, nombre: "Juan", email: "juan@tecla.academy"},
	]

let users = JSON.parse(json);

/*
let jsonF = "{No tiene nada dentro valido}"

try {
	let userF = JSON.parse(jasonF);
	alert (user.name);
} catch (err) {
	alert ("Todo mal")
	alert (err.name);
	alert ( err.message);
}
*/

//
/* 
function buscarId(){
	let idBusqueda = parseInt(prompt("Introduce el ID"))
  
	let idFilter = json.find(data => data.id == idBusqueda);
	
	console.log(idFilter);
  }

  function buscarNombre(){
	let nombreBusqueda = prompt("Introduce el nombre")
  
	let nombreFilter = json.filter(data => data.nombre == nombreBusqueda);
	
	console.log(nombreFilter);
  }
  
buscarId();
buscarNombre();

*/
