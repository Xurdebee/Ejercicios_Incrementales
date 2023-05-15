// const API_URL = "https://jsonplaceholder.typicode.com/";
// jsonplaceholder.typicode.com
// let idPost = document.getElementById(id_post)



// crear en html <div id="imgCtn"></div>

// let imgCtn = document.getElementById('imgCtn');
// function getDogImg(url) {
//     fetch(url)
//         .then(response => response.json())
//         .then(json => {
//             console.log(json);
//             let dogImg = document.createElement('img');
//             dogImg.setAttribute('src', json.message);
//             dogImg.style.width = '300px';
//             imgCtn.appendChild(dogImg);
//         }).catch(err => {
//             console.error('fetch failed', err);
//         });
// }
// getDogImg("https://dog.ceo/api/breeds/image/random");



const API_URL = "https://rickandmortyapi.com/api/character";


let imgCharacter = document.getElementById('img_character');
let nameCharacter = document.getElementById('name_character');
let specieCharacter = document.getElementById('specie_character');


function getCharacter (url){
    fetch (url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            
            
            let characterName = document.createElement("p");
            characterName.setAttribute("placeholder", json.name);
            nameCharacter.appendChild(characterName);

            let characterSpecies = document.createElement("p");
            characterSpecies.setAttribute("String", json.species);
            specieCharacter.appendChild(characterSpecies);
            
            let characterImg = document.createElement("img");
            characterImg.setAttribute("src", json.image);
            imgCharacter.appendChild(characterImg);

        })
        .catch(err =>{
            console.log ("Fectch Failed", err);
        })
}

getCharacter("https://rickandmortyapi.com/api/character/1")