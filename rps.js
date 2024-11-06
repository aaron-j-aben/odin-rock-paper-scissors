/*
    Rock Paper Scissors
    By Aaron J. Aben

    Simple script that runs one-player RPS in the browser console
*/

/* Computer selection */
function getComputerChoice() {
    const cpuNumChoice = Math.floor(Math.random() * 3);
    switch (cpuNumChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    } 
}