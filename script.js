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

    switch (true) {
        case comChoice >= 1 && comChoice <= 33:
            return comOptions[0];
            break;
        case comChoice >= 34 && comChoice <= 66:
            return comOptions[1];
            break;
        case comChoice >= 67 && comChoice <= 100:
            return comOptions[2];
            break;
    }
}

/* 
Function that allows human player to make
their choice of rock, paper, or scissors
*/
function getHumanChoice() {
    /* Human options to choose */
    let humOptions = ["rock", "paper", "scissors"];
    /* Prompt user to enter choice */
    let humChoice = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();

    switch (true) {
        case humChoice === "rock":
            validChoice = true;
            return humOptions[0];
            break;
        case humChoice === "paper":
            validChoice = true;
            return humOptions[1];
            break;
        case humChoice === "scissors":
            validChoice = true;
            return humOptions[2];
            break;
        default:
            console.log("Your choice was not valid. Please try again");
            validChoice = false;
            break;
    }
}

while (validChoice != true) {
    console.log("You choose: " + getHumanChoice());
}

console.log("Computer chooses: " + getComputerChoice());
