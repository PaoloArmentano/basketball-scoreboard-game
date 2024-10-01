let plusOneBtn = document.getElementById('1')
let plusTwoBtn = document.getElementById('2')
let plusThreeBtn = document.getElementById('3')
let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')
let newGamebtn = document.getElementById('new-game-btn')

let homeCount = 0;
let guestCount = 0;

homeScore.innerText = homeCount
guestScore.innerText = guestCount


function add1Home(){
    homeCount += 1
    homeScore.innerHTML = homeCount
    updateScoreColors()
}

function add2Home(){
    homeCount += 2
    homeScore.innerHTML = homeCount
    updateScoreColors()
}

function add3Home(){
    homeCount += 3
    homeScore.innerHTML = homeCount
    updateScoreColors()
}

function add1Guest(){
    guestCount += 1
    guestScore.innerHTML = guestCount
    updateScoreColors()
}

function add2Guest(){
    guestCount += 2
    guestScore.innerHTML = guestCount
    updateScoreColors()
}

function add3Guest(){
    guestCount += 3
    guestScore.innerHTML = guestCount
    updateScoreColors()
}

function newGame(){
    homeCount = 0;
    guestCount = 0;
    homeScore.innerText = 0;
    guestScore.innerText = 0;
    homeScore.style.color = '#F94F6D';
    guestScore.style.color = '#F94F6D';
}

function updateScoreColors() {
    if (homeCount > guestCount) {
        homeScore.style.color = 'red';
    } else if (guestCount > homeCount) {
        guestScore.style.color = 'red';
    } else {
        homeScore.style.color = '#F94F6D';
        guestScore.style.color = '#F94F6D';
    }
}
