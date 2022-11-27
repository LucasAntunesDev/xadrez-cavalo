const create = (create) => document.createElement(create)

$ = (id) => { return document.getElementById(id) }

const posiciona = ({ x, y }) => console.log(x, y)

const disable = (btn) => btn.disabled = true

const verde = (v) => v.style.backgroundImage = 'linear-gradient(to top right, var(--green), var(--green2))'

const none = (n) => n.setAttribute('class', 'none')

const btn = document.getElementsByClassName('casa')

const tabuleiro = $('tabuleiro')
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const d = create('button')
        d.setAttribute('type', 'button')
        d.setAttribute('data-x', i)
        d.setAttribute('data-y', j)
        let x = parseInt(d.getAttribute('data-x'))
        let y = parseInt(d.getAttribute('data-y'))
        d.setAttribute('id', 'casa' + x + '+' + y)
        let casa = parseInt(d.getAttribute('id'))
        const color = (i + j) % 2 === 0 ? 'black' : 'white'
        d.setAttribute('class', `casa ${color}`)
        const img = create('img')
        img.src = 'cavalo.png'
        img.setAttribute('id', 'cavalo')

        d.addEventListener('click', () => {
            posiciona(d.dataset)
            const pos = [[x, y]]
            console.log(pos[0][0], pos[0][1])

            // if (d.disabled != true) d.appendChild(img)
            d.disabled != true ? d.appendChild(img) : ''


            // if (pos[0][1] >=2 || pos[0][1] <=5 || pos[0][0]>=1 || pos[0][0]>=5) {


            if (d.disabled == false) {

                const casaNova1 = $(`casa${pos[0][0] + 1}+${pos[0][1] + 2}`).getAttribute('id')
                casaNova1 != null ? verde($(casaNova1)) : ''

                const casaNova2 = $(`casa${pos[0][0] + 1}+${pos[0][1] - 2}`).getAttribute('id')
                casaNova2 != null ? verde($(casaNova2)) : ''

                const casaNova3 = $(`casa${pos[0][0] - 1}+${pos[0][1] - 2}`).getAttribute('id')
                casaNova3 != null ? verde($(casaNova3)) : ''

                const casaNova4 = $(`casa${pos[0][0] - 1}+${pos[0][1] + 2}`).getAttribute('id')
                casaNova4 != null ? verde($(casaNova4)) : ''

                const casaNova5 = $(`casa${pos[0][0] + 2}+${pos[0][1] + 1}`).getAttribute('id')
                casaNova5 != null ? verde($(casaNova5)) : ''
                // console.log('CASA 5 é: ', casaNova5)
                // if (casaNova5 === null) alert('nulo')

                const casaNova6 = $(`casa${pos[0][0] + 2}+${pos[0][1] - 1}`).getAttribute('id')
                casaNova6 != null ? verde($(casaNova6)) : ''

                const casaNova7 = $(`casa${pos[0][0] - 2}+${pos[0][1] - 1}`).getAttribute('id')
                casaNova7 != null ? verde($(casaNova7)) : ''

                const casaNova8 = $(`casa${pos[0][0] - 2}+${pos[0][1] + 1}`).getAttribute('id')
                verde($(casaNova8))

                /*Se jogar de novo, a imagem do cavalo some
                    true ? none(img) : ''*/
            }

        })
        tabuleiro.appendChild(d)
    }

}

//x += 2, y ++