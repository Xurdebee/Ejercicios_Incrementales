var btnUser0=document.getElementById("user_0")
var btnNew=document.getElementById("new_user")

class User {
    constructor (nombre,apellidos,ciudad,pais,edad,estudios,idiomas,linkedin,hobbies){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.ciudad = ciudad;
        this.pais = pais;
        this.edad = edad;
        this.estudios = estudios;
        this.idiomas = idiomas;
        this.linkedin = linkedin;
        this.hobbies = hobbies;
    };
};

let user0 = {
    nombre: "José",
    apellidos: "Hernández",
    ciudad:"Madrid",
    pais: "España",
    edad: 43,
    estudios: "Si",
    idiomas: "Alguno",
    linkedin: "link",
    hobbies: "Demasiados",

}

btnUser0.addEventListener("click", () => {
    console.log(user0);
});

btnNew.addEventListener("click", () => {
    let newUser = new User
    newUser.nombre = prompt("Introduce tu nombre")
    newUser.apellidos = prompt("Introduce tus apellidos")
    console.log(newUser)
});