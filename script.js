let validChoice = false;
let humanScore = 0;
let computerScore = 0;
let totalRounds = 5;
let gameOptions = ["rock", "paper", "scissors"];

/* 
Function that allows computer player to "choose" 
between rock, paper, or scissors 
*/
function getComputerChoice() {
    // Generate random number
    comChoice = Math.floor(Math.random() * 100) + 1;

    switch (true) {
        case comChoice >= 1 && comChoice <= 33:
            return gameOptions[0];
            break;
        case comChoice >= 34 && comChoice <= 66:
            return gameOptions[1];
            break;
        case comChoice >= 67 && comChoice <= 100:
            return gameOptions[2];
            break;
    }
}

/* 
Function that allows human player to make
their choice of rock, paper, or scissors
*/
function getHumanChoice() {
    // Prompt user to enter choice
    let humChoice = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();

    switch (true) {
        case humChoice === gameOptions[0]:
            validChoice = true;
            return gameOptions[0];
            break;
        case humChoice === gameOptions[1]:
            validChoice = true;
            return gameOptions[1];
            break;
        case humChoice === gameOptions[2]:
            validChoice = true;
            return gameOptions[2];
            break;
        default:
            console.log("Your choice was not valid. Please try again");
            validChoice = false;
            break;
    }
}

/* function keepScore(humanValue, computerValue) {
    humanValue = getHumanChoice();
    computerValue = getComputerChoice();

    Switch (true) {
        case humanValue === "rock"
    }

} */

// Gets code to run in console on web browser
function run() {
    while (validChoice != true) {
        console.log("You choose: " + getHumanChoice());
    }
    
    console.log("Computer chooses: " + getComputerChoice());
}

run();
