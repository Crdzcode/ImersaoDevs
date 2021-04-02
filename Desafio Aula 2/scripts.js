function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function recarregarPagina(){
    document.location.reload();
}

function selecionarPokemon(){
    var pokemons = ["bulbasaur.png", "charmander.png", "squirtle.png"];
    var i = getRandomIntInclusive(0,2);
    while(i == sessionStorage.getItem("pokemon")){
        i = getRandomIntInclusive(0,2);
    }
    var img = document.createElement('img');
    img.src = pokemons[i];
    if(i == 0){
        img.className = "bulbasaurbutton";
    }else{
        img.className = "pokemon";
    }
    document.getElementById('pokemon').appendChild(img);
    sessionStorage.setItem("pokemon", i);
}

function verificarPokemon(valor){
    var pokemon = sessionStorage.getItem("pokemon");
    var retorno = document.getElementById("retorno");
    var botoes = document.getElementById("botoes");
    retorno.className += " content";
    
    if(pokemon == valor){
        retorno.className += " correct";
        var h2 = document.createElement('h2');
        var message = document.createTextNode("Parabéns, você acertou!");
        h2.appendChild(message);
        retorno.appendChild(h2);
    }else{
        retorno.className += " wrong";
        var h2 = document.createElement('h2');
        var message = document.createTextNode("Droga, você errou!");
        h2.appendChild(message);
        retorno.appendChild(h2);
    }

    botoes.remove();

    window.setTimeout(recarregarPagina, 1000);
}