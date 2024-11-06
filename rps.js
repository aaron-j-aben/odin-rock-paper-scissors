/*
    Rock Paper Scissors
    By Aaron J. Aben

    Simple script that runs RPS in the browser console versus a CPU that selects
    randomly.
*/

/* Computer choice selection */
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

/* Human choice seleciton*/
function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, or Scissors?").trim();
    switch (humanChoice) {
        case "r": // Taking advantage of switch fall-through instead of using if-else
        case "R":
        case "rock":
        case "Rock":
            return "Rock";
        case "p":
        case "P":
        case "paper":
        case "Paper":
            return "Paper";
        case "s":
        case "S":
        case "scissors":
        case "Scissors":
            return "Scissors";
        default:
            return null; // to be handled by main game program
    }
}

/* CPU selection testing code */
/*
function testGetComputerChoice() {
    let rocks = 0;
    let papers = 0;
    let scissors = 0;

    for (let i = 0; i < 100; i++) {
        try {
            switch(getComputerChoice()) {
                case "Rock":
                    rocks++;
                    break;
                case "Paper":
                    papers++;
                    break;
                case "Scissors":
                    scissors++;
                    break;
            }
        } catch (e) {
            console.log("Function has an error");
            console.log(e.toString());
            return;
        }
    }

    console.log("Randomness trial results:");
    console.log(`Rock: ${rocks}, Paper: ${papers}, Scissor: ${scissors}`);
}

testGetComputerChoice();
*/

/* Human RPS Choice Testing */
//console.log(getHumanChoice());