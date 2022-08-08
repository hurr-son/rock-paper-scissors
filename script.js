const btns = document.querySelectorAll('.buttons');
let playerScore = 0;
let computerScore = 0;

btns.forEach(button => {button.addEventListener('click', getPlayerChoice)});


function displayRoundResult(roundresults) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = (roundresults);
}


function getComputerChoice() {
    const gameChoices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * gameChoices.length);  
    let result = gameChoices[randomIndex];
    return result;   
}

const computerSelection = getComputerChoice();


function getPlayerChoice(e) {
let playerSelection = (e.target.id);
playerChoice = e.target.textContent;
playRound(playerSelection, getComputerChoice());

}


function playRound(playerSelection, computerSelection) {
   

    if (playerSelection === computerSelection) {
        displayRoundResult(('You Tied! ' + playerSelection + ' equals ' + computerSelection));
      
    } 
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
              (playerSelection === 'paper' && computerSelection === 'rock')   ||
              (playerSelection === 'scissors' && computerSelection === 'paper')) {
        
        playerScore += 1;
        displayRoundResult(('Player Wins! ' + playerSelection + ' beats ' + computerSelection));

        } 
        else {
        computerScore += 1;
        displayRoundResult(('Computer Wins! ' + computerSelection + ' beats ' + playerSelection));

    }
    if (playerScore === 5) {
        displayRoundResult((' You win the game! Reload the page to play again'));
        btns.forEach(button => {button.removeEventListener('click', getPlayerChoice)});
    }
    else if (computerScore === 5) {
        displayRoundResult((' You lost the game! Reload the page to play again'));
        btns.forEach(button => {button.removeEventListener('click', getPlayerChoice)});
    }
    let scoreDiv = document.getElementById('score').textContent = (playerScore + ' - ' + computerScore);
}










