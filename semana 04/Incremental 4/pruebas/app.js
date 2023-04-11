function getCharacter(done){
    const results = fetch("https://rickandmortyapi.com/api/character/?page=2");
    results
        .then(response => response.json())
        .then(data=>{
            done(data)
        });
    }

    getCharacter(data=>{

data.results.forEach(personaje=>{
    const article = document.createRange().createContextualFragment(` 

    <div class="text-center m-5">

        <div class = "image_container">
            <img src = "${personaje.image}" alt = "Personaje" class="rounded-circle">
        </div>
        <h3>${personaje.name}</h2>
        <span>${personaje.species}</span>
    </div>
        `);

        const main = document.querySelector("article");
        article.append(article);

});

    });