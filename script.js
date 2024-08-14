console.log("Hello World")

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

console.log(getComputerChoice());
