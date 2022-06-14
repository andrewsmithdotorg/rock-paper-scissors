function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
    if (rand == 1) {return "Rock"}
    else if (rand == 2) {return "Paper"}
    else if (rand == 3) {return "Scissors"}
  }
  
  function playRound(playerSelection, computerSelection) {
    
    const winMessage = "You Win! " + playerSelection + " beats " + computerSelection;
    const loseMessage = "You Lose! " + computerSelection + " beats " + playerSelection;
    if (playerSelection === computerSelection) {
      return "Both players selected " + playerSelection + "!  It's a tie!";
    } else if ((playerSelection == "Rock") && (computerSelection == "Paper")) {
      return "lose";
    } else if ((playerSelection == "Rock") && (computerSelection == "Scissors")) {
      return "win";
    } else if ((playerSelection == "Scissors") && (computerSelection == "Rock")) {
      return "lose";
    } else if ((playerSelection == "Scissors") && (computerSelection == "Paper")) {
      return "win";
      } else if ((playerSelection == "Paper") && (computerSelection == "Rock")) {  
      return "lose";
    } else if ((playerSelection == "Paper") && (computerSelection == "Scissors")) {
      return "win";
    }
  }
  
  function game () {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let rounds = 5;
    
    for (let i = 0; i < rounds; i++) {
  
      let playerSelection = prompt("make a selection:");
      playerSelection = playerSelection.toLowerCase();
      playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
      const computerSelection = computerPlay();
      const winMessage = "You Win! " + playerSelection + " beats " + computerSelection;
      const loseMessage = "You Lose! " + computerSelection + " beats " + playerSelection;
      
      if (playRound(playerSelection, computerSelection) == "win") {
        console.log(winMessage);
        wins++;
      } else if (playRound(playerSelection, computerSelection) == "lose") {
        console.log(loseMessage);
        losses++;
      } else {
        console.log("Both players selected " + playerSelection + "!  It's a tie!");
        ties++;
      }
      if (i < rounds - 1) {console.log("Current score: you: " + wins + "; me: " + losses);}
    }
    console.log("Final score: you: " + wins + "; me: " + losses);
  }
  
  game();