/* Global Variables */
let validChoice = false;

/* 
Function that allows computer player to "choose" 
between rock, paper, or scissors 
*/
function getComputerChoice() {
    /* Computer player options */
    let comOptions = ["rock", "paper", "scissors"];
    /* Generate random number */
    comChoice = Math.floor(Math.random() * 100) + 1;

    if (comChoice >= 1 && comChoice <= 33) {
        return comOptions[0];
    }
    else if (comChoice >= 34 && comChoice <= 66) {
        return comOptions[1];
    }
    else if (comChoice >= 67 && comChoice <= 100) {
        return comOptions[2];
    }
}

/* 
Function that allows human player to make
their choice of rock, paper, or scissors
*/
function getHumanChoice() {
    let humOptions = ["rock", "paper", "scissors"];
    
    let humChoice = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();

    if (humChoice === "rock") {
        validChoice = true;
        return humOptions[0];
    }
    else if (humChoice === "paper") {
        validChoice = true;
        return humOptions[1];
    }
    else if (humChoice === "scissors") {
        validChoice = true;
        return humOptions[2];
    }
    else {
        console.log("Your choice was not valid. Please try again");
        validChoice = false;
    }
}

while (validChoice != true) {
    console.log("You choose: " + getHumanChoice());
}

console.log("Computer chooses: " + getComputerChoice());
