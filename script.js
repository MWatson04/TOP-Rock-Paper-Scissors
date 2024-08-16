let validChoice = false;
let humanScore = 0;
let computerScore = 0;
let roundsToWin = 3;
let gameOptions = ["rock", "paper", "scissors"];
let gameOver = false;
let globalHumanChoice = "";
let globalComputerChoice = "";

console.log("This is rock, paper, scissors. First to 3 wins!");

/* 
Allow human player to make their
choice of rock, paper, or scissors
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
            console.log("Invalid Input. Please try again");
            validChoice = false;
            break;
    }
}


/* 
Allow computer player to "choose" 
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
        default:
            console.log("CPU has grown a mind of its own");
    }
}

// Keep track of score to determine when game needs to end
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
            break;
        default:
            console.log("Error...Default Option Chosen")
            break;
    }

    // Display score to player
    console.log("Score: You: " + humanScore + " Computer: " + computerScore);

    // Set game over here to avoid extra round being played when game ends
    if (computerScore === roundsToWin || humanScore === roundsToWin) {
        gameOver = true;
    }
}

// Gets code to run in console on web browser
function run() {
    while (!validChoice) {
        console.log("\nYou choose: " + getHumanChoice());
    }

    console.log("Computer chooses: " + getComputerChoice());
    getScore(globalHumanChoice, globalComputerChoice);
}

// Upon gameOver becoming true, display either game over message
function endGame() {
    (humanScore === roundsToWin) ? console.log("Game Over! You Win!") : console.log("Game Over! You Lose!");
}

// Allows game to constantly run through one function
function playGame() {
    while (!gameOver) {
        run();
        
        if (gameOver) {
            endGame();
        }
    }
}

playGame();
