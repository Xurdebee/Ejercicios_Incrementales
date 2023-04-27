const sequelize = require('./conexion_bd.js');

async function newUser(){
	let array_insert = ["1","2","3","4","5","6","7","8","9"];
	console.log(array_insert);
	sequelize.query('INSERT INTO `users`(`alias`,`name`,`surname`,`email`,`password`,`birthdate,`country`,`city`,`linkedIn`) VALUES (?,?,?,?,?,?,?,?,?)',
		{replacement: array_insert, type: sequelize.QueryTypes.SELECT }
	).then(function(proyecto){
		console.log(proyecto);
	})
}

newUser();