let playerScore = 0;
let computerScore = 0;
let round = 0;

function getPlayerMove() {
    let userChoice = prompt("Please enter your move").toLowerCase();
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        return userChoice;
    } else {
        console.log('Not a valid choice');
    }
};

function computerPlay() {
    switch(Math.floor(Math.random()*3)) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'scissors';
        break;
      case 2:
        return 'paper';
        break;
        };
  };

function oneRound() {
    let playerSelection = getPlayerMove();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

function bestOfThree() {
    let playerSelection = getPlayerMove();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        round++;
        alert("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        round++;
        alert("You Win! " + playerSelection + " beats " + computerSelection);
     }
    if (playerSelection === computerSelection) {
        round++;
        alert("You Tie!");
    }
}

