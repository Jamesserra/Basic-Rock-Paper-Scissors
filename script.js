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

const playerSelection = getPlayerMove();
const computerSelection = computerPlay();