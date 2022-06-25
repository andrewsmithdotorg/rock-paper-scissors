// game logic

let playerScore = 0;
let computerScore = 0;

let playerWins = 0;
let computerWins = 0;

function computerPlay() {
  let rand = Math.floor(Math.random() * 3) + 1;
  if (rand == 1) {
    return "rock";
  } else if (rand == 2) {
    return "paper";
  } else if (rand == 3) {
    return "scissors";
  }
}

function getTieMessage(playerSelection, computerSelection) {
  return "You both picked " + playerSelection + ".  It's a tie!";
}

function getWinMessage(playerSelection, computerSelection) {
  return (
    "You picked " +
    playerSelection +
    ", the computer picked " +
    computerSelection +
    ".  You win this round!"
  );
}

function getLoseMessage(playerSelection, computerSelection) {
  return (
    "You picked " +
    playerSelection +
    ", the computer picked " +
    computerSelection +
    ".  You lose this round!"
  );
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultDiv.textContent = getTieMessage(playerSelection, computerSelection);
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    resultDiv.textContent = getLoseMessage(playerSelection, computerSelection);
    computerScore++;
  } else {
    resultDiv.textContent = getWinMessage(playerSelection, computerSelection);
    playerScore++;
  }
  computerScoreDiv.textContent = computerScore;
  playerScoreDiv.textContent = playerScore;
  if (playerScore >= 5 || computerScore >= 5) {
    resetGame(playerScore, computerScore);
  }
}

function resetGame (playerResult, computerResult) {
  let winnerStatement = "";
  if (playerResult > computerResult) {
    winnerStatement = "You win!";
    playerWins++;
  } else {
    winnerStatement = "Computer wins!";
    computerWins++;
  }
  resultDiv.textContent = winnerStatement + "  Make a selection to play again.";
  playerScore = 0;
  computerScore = 0;
  flavorDiv.textContent = "Your number of wins: " + playerWins;
}

// DOM stuff

const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener("click", () => {
  playRound("rock", computerPlay());
});

const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", () => {
  playRound("paper", computerPlay());
});

const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", computerPlay());
});

const resultDiv = document.querySelector("#result");
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");
const flavorDiv = document.querySelector("#flavor-message");
