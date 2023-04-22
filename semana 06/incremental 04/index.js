const express = require('express');
const app = express();
const port = 3000;

//Permite recibir parámetros en formato JSON
app.use(express.json());

//Ruta a la cual solo deben ingresar usuarios administradores.
app.get('/dashboard', (req, res) => {
res.send('You are an admin');}
);

app.listen(port, () => { console.log(`Servidor ${port} activo`)})

function isAdmin(req, res, next) {
	if(req.body.isAdmin){
		next();
	}else{
		res.status(403).send ("No eres Admin, no tienes acceso a la ruta " + req.url);
	}

}
app.use(isAdmin);


let users = [
	{id:1, nombre: "Danilo", email: "danilo@tecla.academy" },
	{id:2, nombre: "Hugo", email: "hugo@tecla.academy"},
	{id:3, nombre: "Juan", email: "juan@tecla.academy"},
	]

app.get("/user/:id",(req,res)=>{
	const user = user.find(data=>data.id === req.params.id);
	if(!user){
		return res.status(404).send("Id no encontrada");
	}
	res.send(user)
})

app.get("/user/:name",(req,res)=>{
	const user = user.find(data=>data.nombre === req.params.nombre);
	if(!user){
		return res.status(404).send("Id no encontrada");
	}
	res.send(user)
})

app.use(function(err,req,res,next){
	if(!err) return next();
	console.log ("Algo no ha funcionado", err);
	res.status(500).send("Error");
});