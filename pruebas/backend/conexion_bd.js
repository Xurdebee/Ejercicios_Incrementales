const Sequelize = require ("sequelize");
const path = "mysql://root@localhost:3306/bd_short";
const sequelize = new Sequelize(path, {operatorAliases: false});

sequelize.authenticate()
.then(() => {
    console.log("Conectado");
})
.catch(err =>{
    console.error("Error de conexión:", err)
})
// .finally(() =>{
//     sequelize.close();
// });


module.exports = sequelize;