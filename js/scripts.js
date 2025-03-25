const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
let isGameOver = false

function jump () {
    if (!mario) return
    if (mario.classList.contains('jump')) return
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).getPropertyValue('bottom').replace('px', '')

    if (pipePosition <= 120 && marioPosition < 80 && pipePosition >= 0) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        isGameOver = true
        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)
