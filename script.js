let validChoice = false;
let humanScore = 0;
let computerScore = 0;
let roundsToWin = 3;
let gameOptions = ["rock", "paper", "scissors"];
let gameOver = false;
let globalHumanChoice = "";
let globalComputerChoice = "";


/* 
Function that allows human player to make
their choice of rock, paper, or scissors
*/
function getHumanChoice() {
    // Prompt user to enter choice
    let humChoice = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();

    switch (true) {
        case humChoice === gameOptions[0]:
            globalHumanChoice = gameOptions[0];
            validChoice = true;
            return globalHumanChoice;
        case humChoice === gameOptions[1]:
            globalHumanChoice = gameOptions[1];
            validChoice = true;
            return globalHumanChoice;
        case humChoice === gameOptions[2]:
            globalHumanChoice = gameOptions[2];
            validChoice = true;
            return globalHumanChoice;
        default:
            console.log("Your choice was not valid. Please try again");
            validChoice = false;
            break;
    }
}


/* 
Function that allows computer player to "choose" 
between rock, paper, or scissors 
*/
function getComputerChoice() {
    validChoice = false;

    // Generate random number
    comChoice = Math.floor(Math.random() * 100) + 1;

    switch (true) {
        case comChoice >= 1 && comChoice <= 33:
            globalComputerChoice = gameOptions[0];
            return globalComputerChoice;
        case comChoice >= 34 && comChoice <= 66:
            globalComputerChoice = gameOptions[1];
            return globalComputerChoice;
        case comChoice >= 67 && comChoice <= 100:
            globalComputerChoice = gameOptions[2];
            return globalComputerChoice;
    }
}

function getScore(humanValue, computerValue) {
    humanValue = globalHumanChoice;
    computerValue = globalComputerChoice;

    switch (true) {
        case humanValue === gameOptions[0] && computerValue === gameOptions[0]:
            console.log("This round is a tie!");
            break;
        case humanValue === gameOptions[0] && computerValue === gameOptions[1]:
            console.log("Computer wins this round!");
            computerScore++;
            break;
        case humanValue === gameOptions[0] && computerValue === gameOptions[2]:
            console.log("You win this round!");
            humanScore++;
            break;
        case humanValue === gameOptions[1] && computerValue === gameOptions[0]:
            console.log("You win this round!");
            humanScore++;
            break;
        case humanValue === gameOptions[1] && computerValue === gameOptions[1]:
            console.log("This round is a tie!");
            break;
        case humanValue === gameOptions[1] && computerValue === gameOptions[2]:
            console.log("Computer wins this round!");
            computerScore++;
            break;
        case humanValue === gameOptions[2] && computerValue === gameOptions[0]:
            console.log("Computer wins this round!");
            computerScore++;
            break;
        case humanValue === gameOptions[2] && computerValue === gameOptions[1]:
            console.log("You win this round!");
            humanScore++;
            break;
        case humanValue === gameOptions[2] && computerValue === gameOptions[2]:
            console.log("This round is a tie!");
        default:
            console.log("Error...Default Option Chosen")
            break;
    }

    console.log("Score: You:" + humanScore + " Computer:" + computerScore);

    if (computerScore === roundsToWin || humanScore === roundsToWin) {
        gameOver = true;
    }
}

// Gets code to run in console on web browser
function run() {
    while (!validChoice) {
        console.log("You choose: " + getHumanChoice());
    }

    console.log("Computer chooses: " + getComputerChoice());
    getScore(globalHumanChoice, globalComputerChoice);
}

function endGame() {
    if (humanScore === roundsToWin){
        console.log("Game Over! You win!");
    }
    else if (computerScore === roundsToWin) {
        console.log("Game Over! You Lose!");
    }
}

/*if (humanScore != roundsToWin && computerScore != roundsToWin) {
    while (!gameOver) {
        run();
    }
} */
while (!gameOver) {
    run();
    
    if (gameOver) {
        endGame();
    }
}

/*else if (gameOver) {
    endGame();
} */
