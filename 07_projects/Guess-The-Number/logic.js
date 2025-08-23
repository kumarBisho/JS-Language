let randNum = Math.floor(Math.random()*100 +1)

// console.log(randNum)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
const start = document.createElement('button')
start.id = 'newGame'
start.style.backgroundColor = 'green'
start.style.color = '#fff'
start.innerHTML = "Start Game"


let prevGuess =[]
let numGuess = 0
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
    
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess<1 || guess>100){
        alert("Enter number between 1 to 100")
    }else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMassage(`You Loss The Game`)
            displayMassage(`Game over. Random number was ${randNum}`)
            endGame()
        }else{
            checkGuess(guess)
            displayGuess(guess)
        }
    }
}

function checkGuess(guess){
    //
    if(guess===randNum){
        displayMassage(`You Guess the number correctlly`)
        displayMassage(`You Win the Game`)
        endGame()
    }else if(guess<randNum){
        displayMassage(`Guess number is less`)
    }else{
        displayMassage(`Guess number is high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML+= `${guess} `
    numGuess++
    remaining.innerHTML = `${10-numGuess}`
}

function displayMassage(massage){
    lowOrHigh.innerHTML = `<h2>${massage}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.appendChild(start)
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randNum = Math.floor(Math.random()*100 +1)
        userInput.disabled = false
        prevGuess = []
        numGuess =1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10-numGuess}`
        startOver.removeChild(p)
        p.removeChild(start)
        playGame = true
    })
}