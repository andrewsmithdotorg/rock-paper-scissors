// game logic

function computerPlay() {
  let rand = Math.floor(Math.random() * 3) + 1;
  if (rand == 1) {
    return "Rock";
  } else if (rand == 2) {
    return "Paper";
  } else if (rand == 3) {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  const winMessage =
    "You Win! " + playerSelection + " beats " + computerSelection;
  const loseMessage =
    "You Lose! " + computerSelection + " beats " + playerSelection;
  if (playerSelection === computerSelection) {
    resultDiv.textContent =
      "Both players selected " + playerSelection + "!  It's a tie!";
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    resultDiv.textContent = loseMessage;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    resultDiv.textContent = winMessage;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    resultDiv.textContent = loseMessage;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    resultDiv.textContent = winMessage;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    resultDiv.textContent = winMessage;
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    resultDiv.textContent = loseMessage;
  }
}

function game() {
  let wins = 0;
  let losses = 0;
  let ties = 0;
  let rounds = 5;

  for (let i = 0; i < rounds; i++) {
    let playerSelection = prompt("make a selection:");
    playerSelection = playerSelection.toLowerCase();
    playerSelection =
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    const computerSelection = computerPlay();
    const winMessage =
      "You Win! " + playerSelection + " beats " + computerSelection;
    const loseMessage =
      "You Lose! " + computerSelection + " beats " + playerSelection;

    if (playRound(playerSelection, computerSelection) == "win") {
      console.log(winMessage);
      wins++;
    } else if (playRound(playerSelection, computerSelection) == "lose") {
      console.log(loseMessage);
      losses++;
    } else {
      console.log(
        "Both players selected " + playerSelection + "!  It's a tie!"
      );
      ties++;
    }
    if (i < rounds - 1) {
      console.log("Current score: you: " + wins + "; me: " + losses);
    }
  }
  console.log("Final score: you: " + wins + "; me: " + losses);
}

// DOM stuff

const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener("click", () => {
  playRound("Rock", computerPlay());
});

const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", () => {
  playRound("Paper", computerPlay());
});

const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener("click", () => {
  playRound("Scissors", computerPlay());
});

const resultDiv = document.querySelector("#result");
