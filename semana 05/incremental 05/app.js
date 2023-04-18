    // Pasos a seguir:

    // Crea un objeto llamado "persona" con las siguientes propiedades: nombre
    // (string) y edad (número).

    // Crea una función llamada "agregarPersona" que tome como parámetros el
    // nombre y la edad de una persona y cree un objeto de tipo "persona" con
    // ellos.

    // Crea un array llamado "personas" y agrega al menos tres objetos de tipo
    // "persona" usando la función "agregarPersona".

// Crea una función llamada "ordenarPorEdad" que ordene el array "personas"
// de forma natural según la edad.

    // Crea una función llamada "buscarPorEdad" que tome como parámetro una
    // edad y devuelva un array con todas las personas que tengan esa edad.

// Agrega un corte de control para asegurarte de que los usuarios no ingresen
// edades negativas o nombres vacíos al agregar personas.

// Agrega una interfaz de usuario para que los usuarios puedan agregar
// personas, ordenarlas por edad y buscarlas por edad.

var btnNew=document.getElementById("new_user")
var btnSortEdad=document.getElementById("sort_edad")
var btnFilterEdad=document.getElementById("filter_edad")
numId=5 //no habrá id 0 accesible.

let personas = [
  {
  fullname: "Julia",
  age: 32,
  id: 1,
  },
  {
    fullname: "Pedro",
    age:26,
    id: 2,
  },
  {
    fullname: "Andrea",
    age: 32,
    id: 3,
  },
  {
    fullname: "Sergio",
    age: 19,
    id: 4,
  }
]

// Añadir personas
console.log(personas);

class Persona{
  constructor (fullname,age,id)
  {
    this.fullname = fullname;
    this.age = age;
    this.id = id;
  }
};

function agregarPersona (){
  let newPersona = new Persona;
  newPersona.fullname = (prompt("Introduce el nombre"));
    if (newPersona.fullname == ""){
    alert("Has introducido un nombre vacio");
    agregarPersona();
    return;}
  
  newPersona.age = parseInt(prompt("Introduce la edad"));
    while (newPersona.age <0){
      alert("Has introducido un número no valido");
      newPersona.age = parseInt(prompt("Introduce una edad valida"))
  }
  newPersona.id = numId++;
  personas.push(newPersona)
      console.log(personas)
}

btnNew.addEventListener("click", () => {
  agregarPersona();
});


//Orden por edad

function ordenarPorEdad(){
  let personasPorEdad = personas.sort((a,b)=>a.age - b.age);
  console.log (personasPorEdad)
};
btnSortEdad.addEventListener("click", () => {
  ordenarPorEdad();
});


// Filtrar por edad


function buscarPorEdad(){
  let edadBusqueda = parseInt(prompt("Introduce la edad"))

  let edadFilter = personas.filter(persona => persona.age == edadBusqueda);
  
  if (edadFilter == ""){
    alert("No hay nadie con esa edad")
  }
  console.log(edadFilter);
}

btnFilterEdad.addEventListener("click", () => {
buscarPorEdad();
});