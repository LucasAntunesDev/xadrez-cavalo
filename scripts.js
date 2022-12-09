const posiciona = ({ x, y }) => console.log(x, y)

let posicaoC = null;

const tab = document.getElementById('tabuleiro');

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const d = document.createElement('button');
        d.setAttribute('type', 'button');
        d.setAttribute('id', `casa${i * 8 + j}`);
        d.setAttribute('data-x', i);
        d.setAttribute('data-y', j);
        const color = (i + j) % 2 === 0 ? 'black' : 'white';
        d.setAttribute('class', `casa ${color}`)
        var jogadas = 0
        var ultimaJogada = jogadas - 1
        
        d.addEventListener('click', () => {
            posiciona(d.dataset)
            if (posicaoC !== null) {
                posicaoC.innerHTML = '';
            }
            d.innerHTML = '<img src="cavalo.png">';
            posicaoC = d;

            if (d.classList.contains('verde') && d.classList.contains(`jogada${jogadas - 1}`)) {
                //Remove atributos se na próxima jogada
                //a casa não for uma das possíveis para o
                //cavalo se movimentar
                d.classList.remove('jogada' + jogadas - 1)
                d.classList.remove('verde')
                d.classList.remove('abled')
                d.classList.remove('jogada' + jogadas)

            }

            var x = parseInt(d.getAttribute('data-x'));
            var y = parseInt(d.getAttribute('data-y'));
            verificarPosicao(x, y);
        })
        
        tab.appendChild(d)
    }
}

const verificarPosicao = (xc, yc) => {
    console.log(xc, yc);
    for (let verifyX = 0; verifyX <= 8; verifyX++) {
        for (let verifyY = 0; verifyY <= 8; verifyY++) {
            if (/*Baixo Direita 1*/verifyY - 2 == Math.abs(xc) && (verifyX - 1) == Math.abs(yc) ||
            /*Baixo Direita 2*/verifyY - 1 == Math.abs(xc) && (verifyX - 2) == Math.abs(yc) ||
            /*Cima Direita 1*/verifyY + 1 == Math.abs(xc) && verifyX - 2 == Math.abs(yc) ||
            /*Cima Direita 2*/verifyY + 2 == Math.abs(xc) && verifyX - 1 == Math.abs(yc) ||
            /*Cima Esquerda 1*/ verifyY + 2 == Math.abs(xc) && (verifyX + 1) == Math.abs(yc) ||
            /*Cima Esquerda 2*/ verifyY + 1 == Math.abs(xc) && (verifyX + 2) == Math.abs(yc) ||
            /*Baixo Esquerda 2*/verifyY - 1 == Math.abs(xc) && (verifyX + 2) == Math.abs(yc) ||
            /*Baixo Esquerda 2*/verifyY - 2 == Math.abs(xc) && (verifyX + 1) == Math.abs(yc)) {
                let btn = document.getElementById(`casa${verifyX * 8 + verifyY}`);
                // btn.style.backgroundImage = 'linear-gradient(to top right, var(--green), var(--green2))';

                //Pinta a casa de verde
                verde(document.getElementById(`casa${verifyY * 8 + verifyX}`))
                // d.classList.contains('verde') ? '' : d.disabled = true
                //Deixa a casa como disabled = false
                abled(document.getElementById(`casa${verifyY * 8 + verifyX}`))
                document.getElementById(`casa${verifyY * 8 + verifyX}`).disbabled = true ? document.getElementById(`casa${verifyY * 8 + verifyX}`).disbabled = false : ''

                // verde(btn)
                // removerVerde(btn)
            }
        }
    }
}
// const verificarPosicao = (xc, yc) => {
//     console.log(xc, yc);
//     for (let verifyX = 0; verifyX <= 8; verifyX++) {
//         for (let verifyY = 0; verifyY <= 8; verifyY++) {
//             if ((Math.abs(xc - verifyX) > 0 &&
//                 Math.abs(yc - verifyY) > 0) &&
//                 (Math.abs(xc - verifyX) <= 2 &&
//                 Math.abs(yc - verifyY) <= 2)) {
//                 let btn = document.getElementById(`casa${verifyX * 8 + verifyY}`);
//                 // btn.style.backgroundImage = 'linear-gradient(to top right, var(--green), var(--green2))';
//                 verde(btn)
//                 // removerVerde(btn)
//             }
//         }
//     }
// }


const verde = (v) => v.classList.add('verde')
const removerVerde = (r) => r.classList.contains('verde') ? r.classList.remove('verde') : ''
const abled = (a) => a.classList.add('abled')