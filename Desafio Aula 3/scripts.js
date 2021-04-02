function generateGoldenCard(min, max) { /* Função para gerar um número aleatório entre 2 números, incluindo eles. */
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCards(){ /* Função para gerar as cartas */
    var chances = 3; /* Seto o número máximo de chances */
    var goldenCard = generateGoldenCard(0,4); /* Invoco a função para gerar um número aleatório, que será o index da carta dourada */
    sessionStorage.setItem('goldenCard', goldenCard); /* Armazeno o index da carta dourada no armazenamento da sessão, assim podendo trabalhar com o valor em qualquer função. */
    var cardSection = document.getElementById('cards'); /* Obtenho a seção da página onde as cartas irão ser geradas */
    var button; /* Inicialização da variável que iremos utilizar para gerar os botões (cartas) */
    var retorno = document.getElementById('retorno'); /* Obtenho o elemento que irá informar a quantidade de chances, e se o usuario achou ou não a carta */
    retorno.innerHTML = "Você ainda tem 3 chances para encontrar a carta dourada."; /* Seto o HTML do elemento para a mensagem padrão */
    for(var i = 0; i < 5; i++){ /* Nesse for iremos criar todas as cartas e atribuir a todas elas a função de checar se ela é a carta dourada */
        button = document.createElement('button'); /* Crio um elemento do tipo botão e armazeno na variavel button */
        button.classList.add('card'); /* Adiciono a minha classe de CSS ao botão, transformando-o em uma carta */
        button.id = i; /* Seto o id do botão para o número atual de i, fazendo com que os botões possuam id de 0 a 4 */
        button.onclick = function checkCard(){ /* Defino a função que irá verificar se o botão é o botão dourado ou não, quando clicado */
            if(chances > 0){
                if(this.id == goldenCard){
                    showCards(); /* Invoco a função para mostrar as cartas */
                    generateTryAgain(); /* Invoco a função para gerar o botão de tentar novamente */
                    retorno.innerHTML = "Você encontrou a carta dourada!"; /* Altero a mensagem do elemento de retorno */
                    chances = 0; /* Seto o número de chances para 0, evitando que o usuário clique nas cartas de novo */
                }else{
                    this.classList.remove('card'); /* Removo o estilo padrão da carta */
                    this.classList.add('wrongCard'); /* Altero para o estilo de carta errada */
                    chances -= 1; /* Diminuo a quantidade de chances */
                    retorno.innerHTML = "Você ainda tem " + chances; /* Altero a mensagem de retorno de acordo com o número de chances */
                    if(chances > 1){ /* Aqui eu verifico se o número de chances é maior que um, assim trocando a frase para o plural ou singular */
                        retorno.innerHTML += " chances para encontrar a carta dourada.";
                    }else{
                        retorno.innerHTML += " chance para encontrar a carta dourada.";
                    }
                    if(chances <= 0){ /* Verifico se o número de tentativas se esgotou */
                        showCards(); /* Invoco a função para mostrar as cartas */
                        generateTryAgain(); /* Invoco a função para gerar o botão de tentar novamente */
                        retorno.innerHTML = "Suas chances esgotaram. Tente novamente!"; /* Altero a mensagem do elemento de retorno */
                    }
                }
            }
        }
        cardSection.appendChild(button); /* Anexo o botão gerado na seção que os botões serão armazenados */
    }
}

function getCard(card){ /* Função simples que retorna a carta de acordo com o ID dela */
    return document.getElementById(card);
}

function generateTryAgain(){ /* Função que gera o botão de tentar novamente */
    var cardSection = document.getElementById('cards'); /* Obtenho a seção da página onde as cartas irão ser geradas */
    var quebralinha = document.createElement('br'); /* Crio um elemento de quebra de linha */
    var tryagain = document.createElement('button'); /* Crio um elemento do tipo botão */
    tryagain.classList.add('tryAgain'); /* Adiciono a classe de estilização do botão de Tentar Novamente */
    tryagain.id = 'tryAgain'; /* Seto o ID do botão */
    tryagain.textContent = 'TENTAR NOVAMENTE'; /* Seto o texto escrito no botão */
    tryagain.onclick = function(){ /* Invoco a função de resetar as cartas quando o botão de Tentar Novamente é clicado */
        resetCards();
    }
    cardSection.appendChild(quebralinha); /* Anexo o elemento de quebra de linha na seção */
    cardSection.appendChild(tryagain); /* Anexo o botão de Tentar Novamente na seção */
}

function resetCards(){ /* Função que reseta as cartas, gerando novas cartas e uma nova carta dourada */
    var button = document.getElementById('tryAgain'); /* Obtenho o elemento do botão de Tentar Novamente */
    var quebralinha = document.querySelector('br'); /* Obtenho o elemento de quebra de linha */
    for(var i = 0; i < 5; i++){ /* Removo os 5 botões (cartas) que estão na página */
        getCard(i.toString()).remove();
    }
    generateCards(); /* Gero 5 cartas novas */
    button.remove(); /* Removo o botão de tentar novamente */
    quebralinha.remove(); /* Removo a quebra de linha, evitando que toda vez que as cartas resetarem, uma nova quebra de linha seja adicionada */
}

function showCards(){ /* Função que mostra todas as cartas, as erradas e a carta dourada */
    var goldenCard = sessionStorage.getItem('goldenCard'); /* Obtenho o index da carta dourada que foi armazenado na sessão */
    var cards = new Array(5); /* Instancio um array com 5 espaços */
    for(var i = 0; i < 5; i++){
        cards[i] = getCard(i.toString()); /* Preencho o array com as 5 cartas que estão na pagina */
    }
    for(var i = 0; i < 5; i++){ /* Mostro todas as cartas, alterando o estilo de acordo com a verificação abaixo */
        if(i == goldenCard){ /* Verifico se o index da carta atual é o index da carta dourada, fazendo uma alteração de CSS diferente, pois a carta dourada é pintada de uma cor diferente */
            cards[i].classList.remove('card');
            cards[i].classList.add('goldenCard');
        }else{
            cards[i].classList.remove('card');
            cards[i].classList.add('wrongCard');
        }
    }
}