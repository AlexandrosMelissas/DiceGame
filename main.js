const new_game  = document.querySelector('.new_game')
const roll_dice = document.querySelector('.roll_dice')
const keep = document.querySelector('.keep')
const dice = document.querySelector('.dice')
const gs1 = document.querySelector('.global_score-1')
const gs2 = document.querySelector('.global_score-2')
const cs1 = document.querySelector('.current_score-1')
const cs2 = document.querySelector('.current_score-2')
const player1div = document.querySelector('.player1')
const player2div = document.querySelector('.player2')
const player1heading = document.querySelector('.player1_heading')
const player2heading = document.querySelector('.player2_heading')

var hasTurn = 'player1'
var player1CurrentScore = 0
var player2CurrentScore = 0
var player1GlobalScore = 0
var player2GlobalScore = 0
var gameFinished = false


roll_dice.addEventListener('click',roll)
keep.addEventListener('click',keepScore)
new_game.addEventListener('click',startNewGame)


function roll() {
    if(!gameFinished){

        let roll =  Math.floor(Math.random() * 6)
        dice.src = `dice-${roll}.png`
        dice.style.display = 'inline'
    
        if(checkRoll(roll)) {
            changeTurn()
            return
        }
    
        addToCurrent(roll)

    }
   
}

function keepScore() {
    if(!gameFinished){

        if(hasTurn == 'player1') {

            player1GlobalScore += player1CurrentScore
            gs1.textContent = player1GlobalScore
            if(checkWinner()) {
                return
            }
            changeTurn()
        } else {
            player2GlobalScore += player2CurrentScore
            gs2.textContent = player2GlobalScore 
            if(checkWinner()) {
              return
            }
            changeTurn()    
        }

    }
   
}

function checkRoll (roll) {
    if(roll === 0) {
        return true
    } else {
        return false
    }
}


function addToCurrent(roll) {

    if(hasTurn == 'player1') {
        player1CurrentScore += roll
        cs1.textContent = player1CurrentScore
    } else {
        player2CurrentScore += roll
        cs2.textContent = player2CurrentScore
    }

}


function changeTurn() {
    if(hasTurn=='player1') {

        player1CurrentScore = 0
        cs1.textContent = 0
        dice.style.display = 'none'
        player1div.classList.remove('turn')
        hasTurn = 'player2'
        player2div.classList.add('turn')

    } else {
        player2CurrentScore = 0
        cs2.textContent = 0
        dice.style.display = 'none'
        player2div.classList.remove('turn')
        hasTurn = 'player1'
        player1div.classList.add('turn')
    }
}

function checkWinner() {
    if(player1GlobalScore >= 100) {
        player1heading.textContent = 'WINNER!'
        dice.style.display = 'none'
        gameFinished = true
        return true
    } else if(player2GlobalScore >= 100) {
        player2heading.textContent = 'WINNER!'
        dice.style.display = 'none'
        gameFinished = true
        return true
    }
}

function startNewGame() {
    player1CurrentScore = 0
    player2CurrentScore = 0
    player1GlobalScore = 0
    player2GlobalScore = 0
    cs1.textContent = 0
    cs2.textContent = 0
    gs1.textContent = 0
    gs2.textContent = 0
    hasTurn = 'player1'
    gameFinished = false
    player1heading.textContent = 'Player 1'
    player2heading.textContent = 'Player 2'
    player1div.classList.remove('turn')
    player2div.classList.remove('turn')
    player1div.classList.add('turn')
}