function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
    if (rand == 1) {return "Rock"}
    else if (rand == 2) {return "Paper"}
    else if (rand == 3) {return "Scissors"}
  }
  
  function playRound(playerSelection, computerSelection) {
    console.log(computerSelection);
  
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    
    const winMessage = "You Win! " + playerSelection + " beats " + computerSelection;
    const loseMessage = "You Lose! " + computerSelection + " beats " + playerSelection;
    if (playerSelection === computerSelection) {
      return "tie!";
    } else if ((playerSelection == "Rock") && (computerSelection == "Paper")) {
      return loseMessage;
    } else if ((playerSelection == "Rock") && (computerSelection == "Scissors")) {
      return winMessage;
    } else if ((playerSelection == "Scissors") && (computerSelection == "Rock")) {
      return loseMessage;
    } else if ((playerSelection == "Scissors") && (computerSelection == "Paper")) {
      return winMessage;
      } else if ((playerSelection == "Paper") && (computerSelection == "Rock")) {  
      return loseMessage;
    } else if ((playerSelection == "Paper") && (computerSelection == "Scissors")) {
      return winMessage;
    }
  }
  
  const playerSelection = prompt("make a selection:");
  const computerSelection = computerPlay();
  
  console.log(playRound(playerSelection, computerSelection));