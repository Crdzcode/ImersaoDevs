class Player{
    constructor(name, v, e, d){
        this.name = name;
        this.v = v;
        this.e = e;
        this.d = d;
        this.p = calcPoints(this);
    }
}

function createPlayers(){
    var players = new Array();
    players[0] = new Player("Matheus", 10, 2, 0);
    players[1] = new Player("Victor", 10, 4, 2);
    players[2] = new Player("Marcos", 10, 6, 0);
    players[3] = new Player("Maitê", 12, 0, 0);
    players[4] = new Player("Kaian", 10, 0, 2);
    table = document.getElementById('table');
    players.forEach(element => {
        var section = document.createElement('section');
        section.classList.add('hover');
        table.appendChild(section);
        var player = document.createElement('section');
        player.classList.add('player');
        section.appendChild(player);
        var win = document.createElement('button');
        win.textContent = 'VITÓRIA';
        win.onclick = function () {
            element = addVitoria(element);
        }
        player.appendChild(win);
        var draw = document.createElement('button');
        draw.textContent = 'EMPATE';
        draw.onclick = function () {
            element = addEmpate(element);
        }
        player.appendChild(draw);
        var loss = document.createElement('button');
        loss.textContent = 'DERROTA';
        loss.onclick = function () {
            element = addDerrota(element);
        }
        player.appendChild(loss);
        var player2 = document.createElement('section');
        player2.classList.add('player2');
        player.appendChild(player2);
        var name = document.createElement('h2');
        name.classList.add('player-info');
        name.textContent = element.name;
        player2.appendChild(name);
        var player3 = document.createElement('section');
        player3.classList.add('player3');
        player2.appendChild(player3);
        var wins = document.createElement('h2');
        wins.classList.add('player-info');
        wins.id = 'vitorias' + element.name;
        wins.style = 'margin: 15px; margin-top: 10px;';
        wins.textContent = element.v;
        player3.appendChild(wins);
        var draws = document.createElement('h2');
        draws.style = 'margin: 15px; margin-top: 10px;';
        draws.classList.add('player-info');
        draws.id = 'empates' + element.name;
        draws.textContent = element.e;
        player3.appendChild(draws);
        var losses = document.createElement('h2');
        losses.style = 'margin: 15px; margin-top: 10px;';
        losses.classList.add('player-info');
        losses.id = 'derrotas' + element.name;
        losses.textContent = element.d;
        player3.appendChild(losses);
        var player4 = document.createElement('section');
        player4.classList.add('player4');
        player3.appendChild(player4);
        var points = document.createElement('h2');
        points.classList.add('player-info');
        points.textContent = element.p;
        points.id = 'pontos' + element.name;
        player4.appendChild(points);
    })
}

function addVitoria(player){
    var wins = document.getElementById('vitorias' + player.name);
    var points = document.getElementById('pontos' + player.name);
    var jogador = player;
    jogador.v++;
    wins.textContent = jogador.v;
    jogador.p = calcPoints(jogador);
    points.textContent = jogador.p;
    return jogador
}

function addEmpate(player){
    var draws = document.getElementById('empates' + player.name);
    var points = document.getElementById('pontos' + player.name);
    var jogador = player;
    jogador.e++;
    draws.textContent = jogador.e;
    jogador.p = calcPoints(jogador);
    points.textContent = jogador.p;
    return jogador;
}

function addDerrota(player){
    var losses = document.getElementById('derrotas' + player.name);
    var jogador = player;
    jogador.d++;
    losses.textContent = jogador.d;
    return jogador;
}

function calcPoints(player) {
    var points = (player.v * 3) + player.e;
    return points;
}