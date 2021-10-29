let playerScore = 0;
let computerScore = 0;
let round = 0;

function startGame() {
    let choice = prompt('One round or Best of Three? eg. Enter for 1 or 2 Wins');
    game(choice);
}  

function game(num) { 
    alert("You Ready!");  
    if (num === '1') {
      oneRound()
    }
    if(num === '2') {
      bestOfThree();
    }
}

function getPlayerMove() {
    let userChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        return userChoice;
    } else {
        alert('Not a valid choice');
    }
}

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
        }
}

function oneRound() {
    let playerSelection = getPlayerMove();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    scoreUpdate();
    if (computerScore === 1) {
        alert("You Lost!");
        playAgain();
    } else if (playerScore === 1) {
        alert("You Won!");
        playAgain();
    } else {
        oneRound();
    } 
}

function bestOfThree() {
    let playerSelection = getPlayerMove();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    scoreUpdate();
    if (computerScore === 2) {
        alert("You Lost!");
        playAgain();
    } else if (playerScore === 2) {
        alert("You Won!");
        playAgain();
    } else {
        bestOfThree();
    } 
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

function scoreUpdate() {
    alert('Round ' + round + ' | User Score: ' + playerScore + ' | Computer Score: ' + computerScore);
}

function playAgain() {
    let r = confirm("Play Again?");
    if (r == true) {
       playerScore = 0;
       computerScore = 0;
       round = 0;
       startGame();
    } else {
      return;
    }
  }
  
  startGame();
  