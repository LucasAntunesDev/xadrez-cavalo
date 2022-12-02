const disable = (b) => document.getElementById(b).disabled = true
const able = (b) => document.getElementById(b).disabled = false
const abled = (a) => a.classList.add('abled')
const verde = (v) => v.classList.add('verde')
const removerVerde = (r) => r.classList.contains('verde') ? r.classList.remove('verde') : ''
const btnVerde = document.getElementsByClassName('verde')
const diferenca = (a, b) => Math.abs(a - b)
const teste = () => document.getElementById('casa16').style.border = 'solid 4px red'

//x += 2, y ++
const posiciona = ({ x, y }) => {
    for (let coluna = 0; coluna < 8; coluna++) {
        for (let linha = 0; linha < 8; linha++) {

            //x+j = x && y+j=y+2;
            // if (Math.abs(j) - 2 == Math.abs(x) && i - 1 == Math.abs(y) 
            // if(y+x == y+2 || x+1==x+1) {

            if (/*Baixo Direita 1*/coluna - 2 == Math.abs(x) && (linha - 1) == Math.abs(y) ||
                /*Baixo Direita 2*/coluna - 1 == Math.abs(x) && (linha - 2) == Math.abs(y) ||
                /*Cima Direita 1*/coluna + 1 == Math.abs(x) && linha - 2 == Math.abs(y) ||
                /*Cima Direita 2*/coluna + 2 == Math.abs(x) && linha - 1 == Math.abs(y) ||
                /*Cima Esquerda 1*/ coluna + 2 == Math.abs(x) && (linha + 1) == Math.abs(y) ||
                /*Cima Esquerda 2*/ coluna + 1 == Math.abs(x) && (linha +  2) == Math.abs(y) ||
                /*Baixo Esquerda 2*/coluna - 1 == Math.abs(x) && (linha + 2) == Math.abs(y)  ||
                /*Baixo Esquerda 2*/coluna - 2 == Math.abs(x) && (linha + 1) == Math.abs(y)) {
                // if (x-i == 2+j){
                // if (linha == y || coluna2 == x){

                //x=3 y=2
                //1-1, 1-3
                //(x-2)-

                // if (coluna2==Math.abs(x-y) && linha == Math.abs(y)){
                verde(document.getElementById(`casa${coluna * 8 + linha}`))
                abled(document.getElementById(`casa${coluna * 8 + linha}`))
                document.getElementById(`casa${coluna * 8 + linha}`).innerHTML = x + ' ; ' + y
            }
        }
    }
    console.log('Linha', x, 'Coluna', y)
}

const none = (n) => n.setAttribute('class', 'none')
const tabuleiro = document.getElementById('tabuleiro')

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const btn = document.createElement('button')
        btn.setAttribute('type', 'button')
        btn.setAttribute('data-x', i)
        btn.setAttribute('data-y', j)
        let x = parseInt(btn.getAttribute('data-x'))
        let y = parseInt(btn.getAttribute('data-y'))
        btn.setAttribute('id', `casa${i * 8 + j}`)
        let casa = parseInt(btn.getAttribute('id'))
        const color = (i + j) % 2 === 0 ? 'black' : 'white'
        btn.setAttribute('class', `casa ${color}`)
        const img = document.createElement('img')
        img.src = 'cavalo.png'
        img.setAttribute('id', 'cavalo')


        btn.addEventListener('click', () => {
            btn.appendChild(img)
            posiciona(btn.dataset)

            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    // btn.classList.contains('') 
                    removerVerde(btn)
                }
            }
            teste()
        })

        tabuleiro.appendChild(btn)
    }

}














// btn.disabled = true
            // disable(btn)
            // const desativados = !document.getElementsByClassName(abled)
            // const ativados = document.getElementsByClassName(abled)
            // const ativados = document.getElementsByClassName(abled)
            // desativados
            // ativados.setAttribute("disabled","disabled")
            // for (let i = 0; i < 8; i++) {
            //     for (let j = 0; j < 8; j++) {
            //         if (!btn.classList.contains('abled')) {
            //             alert('não')
            //             btn.setAttribute("disabled", "disabled")
            //         // } else {
            //         //     btn.setAttribute("disabled", "disabled")
            //         }
            //     }
            // }
    //if(x-i == 2+j) { diagonal
