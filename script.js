function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * options.length);
  const randomChoice = options[randomNumber];
  return randomChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose your option: ");
  let finalChoice = playerChoice.toLowerCase();
  if (finalChoice == "rock" || finalChoice == "paper" || finalChoice == "scissors"){
      return finalChoice
}else{
    console.log("Please choose one of the following choices:\nRock\nPaper\nScissors");
  }
}

function round(computersChoice, playersChoice) {
  if (
    (computersChoice == "rock" && playersChoice == "scissors") ||
    (computersChoice == "scissors" && playersChoice == "paper") ||
    (computersChoice == "paper" && playersChoice == "rock")
  ) {
    console.log(
      `Your choice was: ${playersChoice}\nThe Computer's choice was: ${computersChoice}\nYou lose!`
    );
  } else if (
    (playersChoice == "rock" && computersChoice == "scissors") ||
    (playersChoice == "scissors" && computersChoice == "paper") ||
    (playersChoice == "paper" && computersChoice == "rock")
  ) {
    console.log(
      `Your choice was: ${playersChoice}\nThe Computer's choice was: ${computersChoice}\nYou win!`
    );
  } else if (playersChoice === computersChoice) {
    console.log(
      `Your choice was: ${playersChoice}\nThe Computer's choice was: ${computersChoice}\nIt's a tie!`
    );
  }
}

round(getComputerChoice(), getPlayerChoice());