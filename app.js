const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats {convertToWord(computerChoice). You win!}`;
} 

function lose() {

}

function draw() {

}

// rock_div.addEventListener('click', playGame)
// paper_div.addEventListener('click', playGame)
// scissors_div.addEventListener('click', playGame)

// function getWinner(playerChoice, computerChoice) {
//     if (playerChoice === computerChoice) {
//         return "It is a draw!"
//     } else if (
//     (playerChoice === "r" && computerChoice === "s") || 
//     (playerChoice === "p" && computerChoice === "r") || 
//     (playerChoice === "s" && computerChoice === "p")) {
//         return "You win!"
//     } else {
//         return "You lose!"
//     }
// }

// function playGame () {

// }

// function getWinner(playerChoice, computerChoice) {
//   if (playerChoice === computerChoice) {
//     return "It's a tie!";
//   } else if (
//     (playerChoice === 'rock' && computerChoice === 'scissors') ||
//     (playerChoice === 'paper' && computerChoice === 'rock') ||
//     (playerChoice === 'scissors' && computerChoice === 'paper')
//   ) {
//     return "You win!";
//   } else {
//     return "Computer wins!";
//   }
// }

// function playGame(e) {
//   const playerChoice = e.target.id;
//   const computerChoice = getComputerChoice();
//   const result_div = getWinner(playerChoice, computerChoice);
//   scoreBoard_div.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${scoreBoard_div}`;
// }