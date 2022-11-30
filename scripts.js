const verde = (v) => v.style.backgroundImage = 'linear-gradient(to top right, var(--green), var(--green2))'
const disable = (b) => b.disabled = true

const posiciona = ({ x, y }) => {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            // if (j == y || i == x) {
            // if (j - x == x  || i - y == y) {
            if (j - 2 == x && i - 1 == y ||
                j - 3 == x && i == y ||
                j == x && i - 1 == y ||
                j + 1 == x && i == y ||
                j + 1 == x && i +2 == y||
                j == x && i +3 == y||
                j -2== x && i +3 == y||
                j -3== x && i +2 == y) {
                // alert('arere')
                verde(document.getElementById(`casa${i * 8 + j}`))
                document.getElementById(`casa${i * 8 + j}`).disabled = false
                // document.getElementById(`casa${i*8+j}`).innerHTML='Válido'
            }
        }
    }
    console.log(x, y)
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
            posiciona(btn.dataset)
            btn.disabled = true
            btn.appendChild(img)

        })
        tabuleiro.appendChild(btn)
    }

}

//x += 2, y ++