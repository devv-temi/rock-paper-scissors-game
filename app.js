let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_h1 = document.querySelector(".result > h1");
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
    if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_h1.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win`;
} 

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_h1.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost`;
}

function draw(userChoice, computerChoice) {
    // userScore++;
    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_h1.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It is a tie`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice +computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function mainGame() {
    rock_div.addEventListener('click', function() {
        game("r")
    })
    paper_div.addEventListener('click', function() {
        game("p")
    })
    scissors_div.addEventListener('click', function() {
        game("s")
    })
}

mainGame()