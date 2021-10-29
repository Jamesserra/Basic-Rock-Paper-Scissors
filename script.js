let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return 'It\'s a tie!';
      } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
          computerScore++;
          return 'Computer wins!';
        } else {
          playerScore++;
          return 'You win!';
        }
      } else if (playerSelection === 'paper'){
        if (computerSelection === 'scissors') {
          computerScore++;
          return 'Computer wins!';
        } else {
          playerScore++;
          return 'You win!';
        }
      } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
          computerScore++;
          return 'Computer wins!';
        } else {
          playerScore++;
          return 'You win!';
        }
      }
};

const playerSelection = getPlayerMove();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log("Your Score = " + playerScore);
console.log("Computer Score = " + computerScore);