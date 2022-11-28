const create = (create) => document.createElement(create)
$ = (id) => { return document.getElementById(id) }
const posiciona = ({ x, y }) => console.log(x, y)
const disable = (b) => b.disabled = true
const verde = (v) => v.style.backgroundImage = 'linear-gradient(to top right, var(--green), var(--green2))'
const none = (n) => n.setAttribute('class', 'none')
const btn = document.getElementsByClassName('casa')
const tabuleiro = $('tabuleiro')

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const btn = create('button')
        btn.setAttribute('type', 'button')
        btn.setAttribute('data-x', i)
        btn.setAttribute('data-y', j)
        let x = parseInt(btn.getAttribute('data-x'))
        let y = parseInt(btn.getAttribute('data-y'))
        btn.setAttribute('id', 'casa' + x + '+' + y)
        let casa = parseInt(btn.getAttribute('id'))
        const color = (i + j) % 2 === 0 ? 'black' : 'white'
        btn.setAttribute('class', `casa ${color}`)
        const img = create('img')
        img.src = 'cavalo.png'
        img.setAttribute('id', 'cavalo')

        btn.addEventListener('click', () => {
            posiciona(btn.dataset)
            const pos = [[x, y]]
            console.log(pos[0][0], pos[0][1])

            //}
            // if (btn.disabled == false) {
            const xMaiorQueUmEMenorIgualACinco = x > 1 && x <= 5 ? true : false
            const yMaiorIgualADoisEMenorIgualACinco = y <= 5 && x >= 2 ? true : false

            // let casaNova1 = $(`casa${pos[0][0] + 1}+${pos[0][1] + 2}`).getAttribute('id')
            let casaNova1 =null
            $(`casa${pos[0][0] + 1}+${pos[0][1] + 2}`).getAttribute('id') != null ? casaNova1 = $(`casa${pos[0][0] + 1}+${pos[0][1] + 2}`).getAttribute('id') : ""
            console.log(casaNova1)
            let casaNova2 = $(`casa${pos[0][0] + 1}+${pos[0][1] - 2}`).getAttribute('id')
            let casaNova3 = $(`casa${pos[0][0] - 1}+${pos[0][1] - 2}`).getAttribute('id')
            let casaNova4 = $(`casa${pos[0][0] - 1}+${pos[0][1] + 2}`).getAttribute('id')
            let casaNova5 = $(`casa${pos[0][0] + 2}+${pos[0][1] + 1}`).getAttribute('id')
            let casaNova6 = $(`casa${pos[0][0] + 2}+${pos[0][1] - 1}`).getAttribute('id')
            let casaNova7 = $(`casa${pos[0][0] - 2}+${pos[0][1] - 1}`).getAttribute('id')
            let casaNova8 = $(`casa${pos[0][0] - 2}+${pos[0][1] + 1}`).getAttribute('id')

            // casaNova8 = null
            /*Se jogar de novo, a imagem do cavalo some
                true ? none(img) : ''*/

            if (xMaiorQueUmEMenorIgualACinco && yMaiorIgualADoisEMenorIgualACinco) {
                // if (true) {
                btn.disabled != true ? btn.appendChild(img) : ''
                // casaNova1 = null
                casaNova1 != null ? verde($(casaNova1)) : ''

                casaNova2 != null ? verde($(casaNova2)) : ''

                casaNova3 != null ? verde($(casaNova3)) : ''

                casaNova4 != null ? verde($(casaNova4)) : ''

                casaNova5 != null ? verde($(casaNova5)) : ''

                casaNova6 != null ? verde($(casaNova6)) : ''

                casaNova7 != null ? verde($(casaNova7)) : ''

                casaNova8 != null ? verde($(casaNova8)): ''
                /*Se jogar de novo, a imagem do cavalo some
                    true ? none(img) : ''*/
            } 
            else if (x == 1) {
                alert('meteu essa')
                
                casaNova1 != null ? verde($(casaNova1)) : ''

                casaNova2 != null ? verde($(casaNova2)) : ''

                casaNova3 != null ? verde($(casaNova3)) : ''

                casaNova4 != null ? verde($(casaNova4)) : ''

                casaNova5 != null ? verde($(casaNova5)) : ''

                casaNova6 != null ? verde($(casaNova6)) : ''

                casaNova7 != null ? verde($(casaNova7)) : ''

                verde($(casaNova8))
            }
        })
        tabuleiro.appendChild(btn)
    }

}

//x += 2, y ++