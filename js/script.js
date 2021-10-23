let order = []
let clickedOrder = []
let score = 0

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

//cria ordem aleatória de cores
let shuffleOrder = () => {
    var colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder
    clickedOrder = []

    for (let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }

}
//Acende a próxima cor 
let lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {

//som ao piscar cor 
        if (element === green) {
            element.classList.add('selected')
            var audio = new Audio('./audio/som1.mp3')
            var playPromise = () => audio.play();

        } else if (element === red) {
            element.classList.add('selected')
            var audio = new Audio('./audio/som2.mp3')
            var playPromise = () => audio.play()

        } else if (element === yellow) {
            element.classList.add('selected')
            var audio = new Audio('./audio/som3.mp3')
            var playPromise = () => audio.play()

        } else if (element === blue) {
            element.classList.add('selected')
            var audio = new Audio('./audio/som4.mp3')
            var playPromise = () => audio.play()

        }
        console.log(playPromise);

        if (playPromise !== undefined) {
            playPromise().then(_ => {

            })
        }

    }, number - 250)
    setTimeout(() => {
        element.classList.remove('selected')
    }, number)

}
//confere se os botões clicados estão na mesma ordem em que foram gerados no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver()
            break
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou" Começando próximo nível`)
        nextLevel()
    }
}

// Clique do jogador
let click = (color) => {
    clickedOrder[clickedOrder.length] = color

// som ao clicar 
    if (color === 0) {
        createColorElement(color).classList.add('pressed')
        var audio = new Audio('./audio/som1.mp3')
        var playPromise = () => audio.play();

    } else if (color === 1) {
        createColorElement(color).classList.add('pressed')
        var audio = new Audio('./audio/som2.mp3')
        var playPromise = () => audio.play()

    } else if (color === 2) {
        createColorElement(color).classList.add('pressed')
        var audio = new Audio('./audio/som3.mp3')
        var playPromise = () => audio.play()

    } else if (color === 3) {
        createColorElement(color).classList.add('pressed')
        var audio = new Audio('./audio/som4.mp3')
        var playPromise = () => audio.play()

    }
    console.log(playPromise);

    if (playPromise !== undefined) {
        playPromise().then(_ => {

        })

    }


    setTimeout(() => {
        createColorElement(color).classList.remove('pressed')
        checkOrder()
    }, 250)

}

//função que retorna a cor

let createColorElement = (color) => {
    if (color == 0) {
        return green
    } else if (color == 1) {
        return red
    } else if (color == 2) {
        return yellow
    } else if (color == 3) {
        return blue
    }
}
// função próximo nível 

let nextLevel = () => {
    score++
    shuffleOrder()
}
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\n Clique em Ok para iniciar um novo jogo`)
    order = []
    clickedOrder = []

    playGame()
}

let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo')
    score = 0
    nextLevel()
}
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()

