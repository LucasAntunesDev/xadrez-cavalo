//Adiciona a classe abled
const abled = (a) => a.classList.add('abled')
//Adiciona a classe verde
const verde = (v) => v.classList.add('verde')
//Remove a cor verde de um botão
const removerVerde = (r) => r.classList.contains('verde') ? r.classList.remove('verde') : ''

let posicaoC = null;

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
                verde(document.getElementById(`casa${coluna * 8 + linha}`))
                //Deixa a casa como disabled = false
                abled(document.getElementById(`casa${coluna * 8 + linha}`))
                document.getElementById(`casa${coluna * 8 + linha}`).disbabled = true ? document.getElementById(`casa${coluna * 8 + linha}`).disbabled = false : ''
            }
        }
    }
}

//Adiciona a classe none
const none = (n) => n.classList.add('none')

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
        //Verifica as jogadas
        var jogadas = 0
        var ultimaJogada = jogadas - 1
        //Cria a imagem do cavalo e adiona atributos a ela
        let img = document.createElement('img')
        img.src = 'cavalo.png'
        img.setAttribute('id', 'cavalo')
        
        d.addEventListener('click', () => {
            // jogadas < 1 ? d.appendChild(img) : 
            // img.classList.add('cavalo' + jogadas)
            posiciona(d.dataset)
            if (posicaoC !== null) {
                posicaoC.innerHTML = '';
            }
            d.innerHTML = '<img src="cavalo.png">';
            posicaoC = d;

            //Verifica a cada posição 
            let posicaoVerificada = d.id
            // console.log('verified', posicaoVerificada)
            // console.log('verified', posicaoVerificada)

            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    let botoes = document.getElementById(`casa${i * 8 + j}`)
                    botoes.classList.contains('verde') ? botoes.classList.add(`jogada${jogadas}`) : ''

                    let posicaoAtual = botoes.id
                    // console.log('atual', posicaoAtual)

                    if (botoes.classList.contains('verde') && botoes.classList.contains(`jogada${jogadas - 1}`)) {
                        //Remove atributos se na próxima jogada
                        //a casa não for uma das possíveis para o
                        //cavalo se movimentar
                        botoes.classList.remove('jogada' + jogadas - 1)
                        botoes.classList.remove('verde')
                        botoes.classList.remove('abled')
                        botoes.classList.remove('jogada' + jogadas)

                    }
                    console.log('atual', posicaoAtual ,'verifica', posicaoVerificada)
                    botoes.classList.contains('jogada' + ultimaJogada) ? removerVerde(botoes) : ''
                    botoes.classList.contains('abled') ? '' : botoes.classList.add('disabled')
                    botoes.classList.contains('disabled') ? botoes.setAttribute('disabled', 'true') : ''
                    botoes.classList.contains('verde') ? botoes.removeAttribute('disabled') : ''
                    botoes.hasChildNodes ? abled(botoes) : ''
                }
            }
            jogadas++
        })
        //Adiciona o botão como filho do tabueiro
        tabuleiro.appendChild(d)
    }

}