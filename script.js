function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
    if (rand == 1) {return "Rock"}
    else if (rand == 2) {return "Paper"}
    else if (rand == 3) {return "Scissors"}
  }
  
  function playRound(playerSelection, computerSelection) {
  
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    
    const winMessage = "You Win! " + playerSelection + " beats " + computerSelection;
    const loseMessage = "You Lose! " + computerSelection + " beats " + playerSelection;
    if (playerSelection === computerSelection) {
      return "Both players selected " + playerSelection + "!  It's a tie!";
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
  
  function game () {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    
    for (let i = 0; i < 2; i++) {
  
      const playerSelection = prompt("make a selection:");
      const computerSelection = computerPlay();
      
      if (playRound(playerSelection, computerSelection).includes("You Win!")) {
        console.log(winMessage);
        wins++;
      } else if (playRound(playerSelection, computerSelection).includes("You Lose!")) {
        console.log("failure");
        losses++;
      } else if (playRound(playerSelection, computerSelection).includes("tie!")) {
        console.log("tie");
        ties++;
      }
    }
    console.log(wins);
  }
  
  game();