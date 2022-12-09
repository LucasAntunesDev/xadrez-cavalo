//Adiciona a classe abled
const abled = (a) => a.classList.add('abled')
//Adiciona a classe que determina que o fundo da casa
//será verde
const adicionarFundoVerde = (v) => v.classList.add('verde')
//Remove a cor verde de uma casa
const removerFundoVerde = (r) => r.classList.contains('verde') ? r.classList.remove('verde') : ''
let posicao = null;

const posiciona = ({ x, y }) => {
    //Prevê as possições possíveis para o cavalo se mover
    for (let coluna = 0; coluna < 8; coluna++) {
        for (let linha = 0; linha < 8; linha++) {
            if (/*Baixo Direita 1*/coluna - 2 == Math.abs(x) && (linha - 1) == Math.abs(y) ||
                /*Baixo Direita 2*/coluna - 1 == Math.abs(x) && (linha - 2) == Math.abs(y) ||
                /*Cima Direita 1*/coluna + 1 == Math.abs(x) && linha - 2 == Math.abs(y) ||
                /*Cima Direita 2*/coluna + 2 == Math.abs(x) && linha - 1 == Math.abs(y) ||
                /*Cima Esquerda 1*/ coluna + 2 == Math.abs(x) && (linha + 1) == Math.abs(y) ||
                /*Cima Esquerda 2*/ coluna + 1 == Math.abs(x) && (linha + 2) == Math.abs(y) ||
                /*Baixo Esquerda 2*/coluna - 1 == Math.abs(x) && (linha + 2) == Math.abs(y) ||
                /*Baixo Esquerda 2*/coluna - 2 == Math.abs(x) && (linha + 1) == Math.abs(y)) {
                //Pinta a casa de verde
                adicionarFundoVerde(document.getElementById(`casa${coluna * 8 + linha}`))
                //Deixa a casa como disabled = false
                abled(document.getElementById(`casa${coluna * 8 + linha}`))
            }
        }
    }
}

//Carrega o tabuleiro
const tabuleiro = document.getElementById('tabuleiro')

for (let i = 0; i < 8; i++) { //Linhas
    for (let j = 0; j < 8; j++) { //Colunas
        //Cria um botão e adiona atributos a ele
        const d = document.createElement('button')
        d.setAttribute('type', 'button')
        d.setAttribute('data-x', i)
        d.setAttribute('data-y', j)
        d.setAttribute('id', `casa${i * 8 + j}`)
        const color = (i + j) % 2 === 0 ? 'black' : 'white'
        d.setAttribute('class', `casa ${color}`)
        //Conta as jogadas
        var jogadas = 0

        d.addEventListener('click', () => {
            posiciona(d.dataset)
            if (posicao !== null) {
                posicao.innerHTML = '';
            }
            //Adiciona a imgame do cavalo
            d.innerHTML = '<img src="cavalo.png">';
            posicao = d;

            //Verifica algumas características das casas 
            //(usado para desabilita-las, remover fundo verde, entre outros)
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    let botoes = document.getElementById(`casa${i * 8 + j}`)
                    botoes.classList.contains('verde') ? botoes.classList.add(`jogada${jogadas}`) : ''

                    //Remove atributos se na próxima jogada
                    //a casa não for uma das possíveis para o
                    //cavalo se movimentar
                    if (botoes.classList.contains('verde') &&
                        botoes.classList.contains(`jogada${jogadas - 1}`)) {
                        botoes.classList.remove('jogada' + jogadas - 1)
                        botoes.classList.remove('verde')
                        botoes.classList.remove('abled')
                        botoes.classList.remove('jogada' + jogadas)

                    }
                    //Desativa/ativa os botões
                    botoes.classList.contains('abled') ? '' : botoes.classList.add('disabled')
                    botoes.classList.contains('disabled') ? botoes.setAttribute('disabled', 'true') : ''
                    botoes.classList.contains('verde') ? botoes.removeAttribute('disabled') : ''
                }
            }
            jogadas++
        })
        //Adiciona o botão como filho do tabueiro
        tabuleiro.appendChild(d)
    }
}