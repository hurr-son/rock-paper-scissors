const btns = document.querySelectorAll('.buttons');
let playerScore = 0;
let computerScore = 0;

let resultDiv = document.getElementById('results').textContent = (playerScore + ' - ' + computerScore);

btns.forEach(button => {button.addEventListener('click', getPlayerChoice)});




// Write a function that returns the computers choice (Rock, Paper, or Scissors)

function getComputerChoice() {
    const gameChoices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * gameChoices.length);  
    let result = gameChoices[randomIndex];
    return result;   
}

const computerSelection = getComputerChoice();

// Handle user input (Rock, Paper, or Scissors)
function getPlayerChoice(e) {
let playerSelection = (e.target.id);
playerChoice = e.target.textContent;
playRound(playerSelection, getComputerChoice());

}
// Write a function that plays a single round of Rock, Paper, Scissors
// The function parameters are playerSelection and computerSelection

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log('You Tied! ' + playerSelection + ' equals ' + computerSelection);
      
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
              (playerSelection === 'paper' && computerSelection === 'rock')   ||
              (playerSelection === 'scissors' && computerSelection === 'paper')) {
        
        playerScore += 1;
        console.log('Player Wins! ' + playerSelection + ' beats ' + computerSelection);
     
    } else {
        computerScore += 1;
        console.log('Computer Wins! ' + computerSelection + ' beats ' + playerSelection);

    }
    
}



 //Write a function that plays 5-rounds of the game and displays the winner
 //at the end

function gameScore() {
    
    //Figure out how to keep score

    if (playerScore === 5) {
        (playerScore + ' - ' + computerScore + ' You win the game! Reload the page to play again');
    }
    else if (computerScore === 5) {
        (computerScore + ' - ' + playerScore + ' You lost the game! Reload the page to play again');
    }
    else {
        (playerScore + ' - ' + computerScore);
    }
}  




