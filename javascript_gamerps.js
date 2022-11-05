const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const userScoreDisplay = document.getElementById('userScore')
const computerScoreDisplay = document.getElementById('computerScore')
const randomChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let userScore = 0
let computerScore = 0

let intro = document.querySelector(".splash-screen");
let logo = document.querySelector(".header");
let logoSpan = document.querySelectorAll(".message");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });
    function startgame(){
    setTimeout(() => {
      logoSpan.forEach(() => {
        span.classList.remove("active");
        span.classList.add("fade");
      }, (idx + 1) * 50);
    }, 2000);
  }
    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});


randomChoices.forEach(randomChoice => randomChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'huft, tough game! its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'yay! you win!!!'
    userScore += 1
    computerScore += 0
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'boo! you lose!'
    computerScore += 1
    userScore += 0
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'yay! you win!!'
    userScore += 1
    computerScore += 0
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'boo! you lose!'
    computerScore += 1
    userScore += 0
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'yay! you win!!'
    userScore += 1
    computerScore += 0
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'boo! you lose!'
    computerScore += 1
    userScore += 0
  }
  resultDisplay.innerHTML = result
  userScoreDisplay.innerHTML = userScore
  computerScoreDisplay.innerHTML = computerScore
}

/* fitur tambahan yaitu menukar skor komputer dengan skor pengguna */
function switchScores() {
    computerChoice = ''
    result = ''
    temp = computerScore
    computerScore = userScore
    userScore = temp
}