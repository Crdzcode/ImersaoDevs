//Classe que armazena os atributos da carta
class Card{
    constructor(name, image, attack, defense, power){
        this.name = name;
        this.image = image;
        this.attack = 'Ataque: ' + attack;
        this.defense = 'Defesa: ' + defense;
        this.power = 'Poder: ' + power;
    }
}

//Criação das cartas do jogador
var itadori = new Card('Itadori Yuuji', 'https://i.pinimg.com/564x/96/2d/7a/962d7a304be674e73889c88118d8ecb8.jpg', 92, 86, 58);
var megumi = new Card('Fushiguro Megumi', 'https://wallpaperaccess.com/full/5254682.jpg', 76, 60, 94);
var kugisaki = new Card('Kugisaki Nobara', 'https://i.pinimg.com/originals/81/40/c8/8140c8eb00930d0fd47edc8ceb2c37c1.jpg', 82, 58, 92);
var gojo = new Card('Gojo Satoru', 'https://i.pinimg.com/originals/97/bb/5d/97bb5d0a902b5e80adb5606524ecb661.jpg', 94, 90, 98);
var todo = new Card('Todo Aoi', 'https://i.redd.it/ybe53vod3g661.jpg', 98, 96, 78);

//Armazenamento dos personagens em um array
var characters = [itadori, megumi, kugisaki, gojo, todo];

//Criação das cartas do adversário
var eso = new Card('Eso', 'https://www.omegascopio.com.br/wp-content/uploads/2021/03/Jujutsu-Kaisen-EP-24.jpg', 82, 70, 88);
var kechizu = new Card('Kechizu', 'https://i.ytimg.com/vi/YA11fQREtMQ/maxresdefault.jpg', 50, 68, 86);
var mahito = new Card('Mahito', 'https://i.pinimg.com/originals/49/7d/a8/497da887ce20742732c3b58eb724a731.jpg', 70, 86, 96);
var jogo = new Card('Jogo', 'https://i.pinimg.com/originals/51/01/90/51019039c94a4f9c1631e79614ec2f89.png', 78, 74, 86);
var hanami = new Card('Hanami', 'https://i.pinimg.com/originals/47/cb/78/47cb78f06a1ce30fed295574416d0078.jpg', 92, 86, 96);

//Armazenamento dos personagens em um array
var villains = [eso, kechizu, mahito, jogo, hanami];

//Criação de variável global para atribuição da carta selecionada pelo jogador
var selectedChar = null;

//Função que gera um número inteiro aleatório entre um mínimo e um máximo.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Função que cria a bolinha que armazena os ícones dos atributos
function createDot(type){
    var dot = document.createElement('div');
    dot.classList.add('dot');
    if(type == 0){
        var img = document.createElement('img');
        img.classList.add('icon');
        img.src = 'images/swords.png';
        dot.id = 'attackDot';
    }else if(type == 1){
        var img = document.createElement('img');
        img.classList.add('icon');
        img.src = 'images/security.png';
        dot.id = 'defenseDot';
    }else if(type == 2){
        var img = document.createElement('img');
        img.classList.add('icon');
        img.src = 'images/comet.png';
        dot.id = 'powerDot';
    }
    dot.appendChild(img);
    return dot;
}

//Função que cria e retorna uma carta
function renderCard(char, doClickEvent, enemyCard){
    //Criação da base da carta e anexando ela ao container
    var body = document.querySelector('#selectContainer');
    var card = document.createElement('div');
    card.classList.add('card');

    body.appendChild(card);

    //Preenchimento da carta
    var charName = document.createElement('div');
    charName.classList.add('character-name');
    var h2 = document.createElement('h2');
    h2.textContent = char.name;
    charName.appendChild(h2);

    card.appendChild(charName);

    var img = document.createElement('img');
    img.src = char.image;
    img.classList.add('character');

    card.appendChild(img);

    var characterInfo = document.createElement('div');
    characterInfo.classList.add('character-info');

    var attack = document.createElement('div');
    attack.classList.add('attack');
    //Verificação para caso seja a carta adversária, setar um id diferente (utilizado nas funções la em baixo)
    if(enemyCard){
        attack.id = 'enemyAttackDiv';
    }
    
    h2 = document.createElement('h2');
    h2.textContent = char.attack;

    attack.appendChild(h2);

    var attackDot = createDot(0);
    attackDot.addEventListener('click', clickAttack);
    //Verificação para caso seja a carta adversária, setar um id diferente (utilizado nas funções la em baixo)
    if(enemyCard){
        attackDot.id = 'enemyAttackDot';
    }

    characterInfo.appendChild(attackDot);
    characterInfo.appendChild(attack);

    card.appendChild(characterInfo);

    characterInfo = document.createElement('div');
    characterInfo.classList.add('character-info');

    var defense = document.createElement('div');
    defense.classList.add('attack');
    //Verificação para caso seja a carta adversária, setar um id diferente (utilizado nas funções la em baixo)
    if(enemyCard){
        defense.id = 'enemyDefenseDiv';
    }
    
    h2 = document.createElement('h2');
    h2.textContent = char.defense;

    defense.appendChild(h2);

    var defenseDot = createDot(1);
    defenseDot.addEventListener('click', clickDefense);
    //Verificação para caso seja a carta adversária, setar um id diferente (utilizado nas funções la em baixo)
    if(enemyCard){
        defenseDot.id = 'enemyDefenseDot';
    }

    characterInfo.appendChild(defenseDot);
    characterInfo.appendChild(defense);

    card.appendChild(characterInfo);

    characterInfo = document.createElement('div');
    characterInfo.classList.add('character-info');

    var power = document.createElement('div');
    power.classList.add('attack');
    //Verificação para caso seja a carta adversária, setar um id diferente (utilizado nas funções la em baixo)
    if(enemyCard){
        power.id = 'enemyPowerDiv';
    }
    
    h2 = document.createElement('h2');
    h2.textContent = char.power;

    power.appendChild(h2);

    var powerDot = createDot(2);
    powerDot.addEventListener('click', clickPower);
    //Verificação para caso seja a carta adversária, setar um id diferente (utilizado nas funções la em baixo)
    if(enemyCard){
        powerDot.id = 'enemyPowerDot';
    }
    characterInfo.appendChild(powerDot);
    characterInfo.appendChild(power);

    card.appendChild(characterInfo);
    //Verificação para saber se deve ou não adicionar o listener. (Caso seja uma carta invisivel ou do oponente, esse listener não pode estar ativo)
    if(doClickEvent){
        card.addEventListener('click', clickCard)
    }

    //Função que é rodada quando o usuário clica em uma das cartas
    function clickCard(){
        var cardsSelected = document.querySelector('#selectedContainer');
        setTimeout(function(){
            cardsSelected.appendChild(card);
            showSelectedCards();
        }, 1000);
        card.removeEventListener('click', clickCard);
        selectedChar = char;
    }

    //Função que é rodada quando ele clica no atributo de ataque
    function clickAttack(){
        hideSelectedCards();
        setTimeout(function(){
            generateBattle(selectedChar, card, 0, attackDot, attack);
            showBattle();
        }, 1000);
        attackDot.removeEventListener('click', clickAttack);
    }

    //Função que é rodada quando ele clica no atributo de defesa
    function clickDefense(){
        hideSelectedCards();
        setTimeout(function(){
            generateBattle(selectedChar, card, 1, defenseDot, defense);
            showBattle();
        }, 1000);
        defenseDot.removeEventListener('click', clickDefense);
    }

    //Função que é rodada quando ele clica no atributo de poder
    function clickPower(){
        hideSelectedCards();
        setTimeout(function(){
            generateBattle(selectedChar, card, 2, powerDot, power);
            showBattle();
        }, 1000);
        powerDot.removeEventListener('click', clickPower);
    }

    return card;

}

//Função que gera a batalha e toda as funcionalidades
function generateBattle(char, playerCard, type, dot, div){
    var battleContainer = document.querySelector('#battleContainer');
    var h1 = document.querySelector('#battle-title');

    //Obtenção dos elementos relativo ao adversário
    var enemyChar = villains[getRandomIntInclusive(0, villains.length - 1)]
    var enemy = renderCard(enemyChar, false, true);
    var enemyAttackDiv = document.querySelector('#enemyAttackDiv');
    var enemyAttackDot = document.querySelector('#enemyAttackDot');
    var enemyDefenseDiv = document.querySelector('#enemyDefenseDiv');
    var enemyDefenseDot = document.querySelector('#enemyDefenseDot');
    var enemyPowerDiv = document.querySelector('#enemyPowerDiv');
    var enemyPowerDot = document.querySelector('#enemyPowerDot');
    enemy.id = 'enemyCard';

    //Criação de uma carta invisível para espaçamento uniforme entre as cartas
    var empty = document.createElement('div');
    empty.classList.add('card');
    empty.style = 'opacity: 0%; cursor: auto;';

    //Anexar elementos ao container da batalha
    battleContainer.appendChild(playerCard);
    battleContainer.appendChild(empty);
    battleContainer.appendChild(enemy);

    //Verificações que determinam se você ganhou ou perdeu de acordo com o atributo escolhido.
    if(type == 0){
        if(char.attack > enemyChar.attack){
            setTimeout(function(){
                win();
                enemyAttackDiv.style = 'transform: scale(1.05); background-color: #d8363e;';
                enemyAttackDot.style = 'transform: scale(1.05); background-color: #d8363e;';
            }, 1200);
        }else{
            setTimeout(function(){
                loss();
                enemyAttackDiv.style = 'transform: scale(1.05); background-color: #36d867;';
                enemyAttackDot.style = 'transform: scale(1.05); background-color: #36d867;';
            }, 1200);
        }
    }else if(type == 1){
        if(char.defense > enemyChar.defense){
            setTimeout(function(){
                win();
                enemyDefenseDiv.style = 'transform: scale(1.05); background-color: #d8363e;';
                enemyDefenseDot.style = 'transform: scale(1.05); background-color: #d8363e;';
            }, 1200);
        }else{
            setTimeout(function(){
                loss();
                enemyDefenseDiv.style = 'transform: scale(1.05); background-color: #36d867;';
                enemyDefenseDot.style = 'transform: scale(1.05); background-color: #36d867;';
            }, 1200);
        }
    }else if(type == 2){
        if(char.power > enemyChar.power){
            setTimeout(function(){
                win();
                enemyPowerDiv.style = 'transform: scale(1.05); background-color: #d8363e;';
                enemyPowerDot.style = 'transform: scale(1.05); background-color: #d8363e;';
            }, 1200);
        }else{
            setTimeout(function(){
                loss();
                enemyPowerDiv.style = 'transform: scale(1.05); background-color: #36d867;';
                enemyPowerDot.style = 'transform: scale(1.05); background-color: #36d867;';
            }, 1200);
        }
    }

    //Função que será rodada toda vez que o usuário ganhar
    function win(){
        dot.style = 'transform: scale(1.05); background-color: #36d867;';
        div.style = 'transform:scale(1.05); background-color: #36d867;';
        h1.textContent = 'VOCÊ GANHOU!';
        h1.style = 'color: #36d867;';
    }

    //Função que será rodada toda vez que o usuário perder
    function loss(){
        h1.textContent = 'VOCÊ PERDEU!';
        h1.style = 'color: #d8363e;';
        dot.style = 'transform: scale(1.05); background-color: #d8363e;';
        div.style = 'transform:scale(1.05); background-color: #d8363e;';
    }

    //Timeout para voltar ao menu principal
    setTimeout(function(){
        hideBattle();
        showMenu();
    }, 3000)
}

//Função que gera todas as cartas que o jogador poderá escolher
function generateCards(){
    var cards  = document.querySelector('#selectContainer')
    var random = new Array(3);
    var playerCards = new Array(3);
    var aux = getRandomIntInclusive(0, characters.length - 1);;
    for(var i = 0; i<3; i++){
        for(var j = 0; j<random.length; j++){
            while(random[j] == aux || random[i-1] == aux){
                aux = getRandomIntInclusive(0, characters.length - 1);
            }
        }
        random[i] = aux;
        playerCards[i] = renderCard(characters[random[i]], true, false);
        cards.appendChild(playerCards[i]);
    }
    cards.addEventListener('click', hideCards);
}

//Todas as funções abaixo são para esconder ou mostrar uma parte do jogo
function hideMenu(){
    var content = document.querySelector(".content");

    content.style.top = "-400px";
}

function showMenu(){
    var content = document.querySelector(".content");

    content.style.top = "calc(50% - 200px)";
}

function showCards(){
    var cards = document.querySelector("#select");

    cards.style.top = "calc(50% - 325px)";
}

function hideCards(){
    var cards = document.querySelector("#select");
    var cardsContainer = document.querySelector('#selectContainer');

    cards.style.top = "100%";
    setTimeout(function(){
        cardsContainer.innerHTML = '';
    }, 1000)
}

function showSelectedCards(){
    var cards = document.querySelector("#selected");

    cards.style.top = "calc(50% - 325px)";
}

function hideSelectedCards(){
    var cards = document.querySelector("#selected");
    var cardsContainer = document.querySelector('#selectedContainer');

    cards.style.top = "100%";
    setTimeout(function(){
        cardsContainer.innerHTML = '';
    }, 1000)
}

function showBattle(){
    var cards = document.querySelector("#battle");

    cards.style.top = "calc(50% - 325px)";
}

function hideBattle(){
    var cards = document.querySelector("#battle");
    var cardsContainer = document.querySelector('#battleContainer');
    var battleTitle = document.querySelector('#battle-title');

    cards.style.top = "100%";
    setTimeout(function(){
        cardsContainer.innerHTML = '';
        battleTitle.textContent = 'BATALHA';
        battleTitle.style = 'color: smokedwhite;';
    }, 1000)
}

//Event listener para voltar ao elemento principal
document.addEventListener('keydown', (e) => {
    hideCards();
    hideSelectedCards();
    hideBattle();
    showMenu();
})