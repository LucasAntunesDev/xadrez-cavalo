const abled = (a) => a.classList.add('abled')
const verde = (v) => v.classList.add('verde')
const removerVerde = (r) => r.classList.contains('verde') ? r.classList.remove('verde') : ''

//Prevê as possições possíveis
const posiciona = ({ x, y }) => {
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
                verde(document.getElementById(`casa${coluna * 8 + linha}`))
                abled(document.getElementById(`casa${coluna * 8 + linha}`))
                document.getElementById(`casa${coluna * 8 + linha}`).disbabled = true ? document.getElementById(`casa${coluna * 8 + linha}`).disbabled = false : ''
            }
        }
    }
    // console.log('Linha', x, 'Coluna', y)
}

const none = (n) => n.setAttribute('class', 'none')
const tabuleiro = document.getElementById('tabuleiro')

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const btn = document.createElement('button')
        btn.setAttribute('type', 'button')
        btn.setAttribute('data-x', i)
        btn.setAttribute('data-y', j)
        btn.setAttribute('id', `casa${i * 8 + j}`)
        const color = (i + j) % 2 === 0 ? 'black' : 'white'
        btn.setAttribute('class', `casa ${color}`)
        const img = document.createElement('img')
        img.src = 'cavalo.png'
        img.setAttribute('id', 'cavalo')

        var jogadas = 0
        var ultimaJogada = jogadas - 1
        btn.addEventListener('click', () => {
            btn.appendChild(img)
            img.classList.add('cavalo' + jogadas)
            posiciona(btn.dataset)

            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    let botoes = document.getElementById(`casa${i * 8 + j}`)
                    botoes.classList.contains('verde') ? botoes.classList.add(`jogada${jogadas}`) : ''

                    if (botoes.classList.contains('verde') && botoes.classList.contains(`jogada${jogadas - 1}`)) {
                        botoes.classList.remove('jogada' + jogadas - 1)
                        botoes.classList.remove('verde')
                        botoes.classList.remove('abled')
                        botoes.classList.remove('jogada' + jogadas)

                    }

                    botoes.classList.contains('jogada' + ultimaJogada) ? removerVerde(botoes) : ''

                    botoes.classList.contains('abled') ? '' : botoes.classList.add('disabled')
                    botoes.classList.contains('disabled') ? botoes.setAttribute('disabled', 'true') : ''
                    botoes.classList.contains('verde') ? botoes.removeAttribute('disabled') : ''
                    botoes.hasChildNodes ? abled(botoes) : ''
                }
            }
            jogadas++
        })

        tabuleiro.appendChild(btn)
    }

}