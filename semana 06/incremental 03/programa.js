// libreria moment

var moment = require("moment");

// moment.locale("es")
// var horayDia = moment ().format ("dddd - H:mm")
// console.log (horayDia);

// moment.locale("en");
// var horayDiaEn = moment ().format ("y dddd - H:mm")
// console.log (horayDiaEn);


var utc = moment (new Date()).utc();
var now = moment (new Date());



var diferenciaHoras = moment(utc.diff(now));

console.log ("La cantidad de diferencia en horas es: " + diferenciaHoras.hours());

(`La segunda fecha (${fecha2}) es mayor que la primera fecha (${fecha1}).`);
(`La primera fecha (${fecha2}) es mayor que la segunda fecha (${fecha2}).`);

var fecha1 = "2023-19-04"
var fecha2 = "1990-04-19"

if(moment(fecha1).isBefore(fecha2)){
	console.log (`La segunda fecha (${fecha2}) es mayor que la primera fecha (${fecha1}).`);
	}
	else{
		console.log (`La primera fecha (${fecha1}) es mayor que la segunda fecha (${fecha2}).`);
	};



// libreria express

const express = require("express");
const server = express ();

server.get ("/", (req,res)=>{
	res.send("Hola Mundo");
});

server.get ("/fotos/1", (req,res)=>{
	res.json({
		id:1,
		title: "imagen de ejemplo",
		url: "https://direcciónejemplo.com/image/1",
	});
});


server.get ("/error", (req,res)=>{
	res.statusCode = 500;
	res.json ({error:"Algo salió muy mal =( "});
});

server.listen(3000,()=>{
	console.log ("El servidor se está iniciando en el puerto 3000 ...")
});



// libreria cool-images

const coolImages = require("cool-images");

coolImages.one();
server.get ("/", (req,res)=>{
	coolImages.one();
});