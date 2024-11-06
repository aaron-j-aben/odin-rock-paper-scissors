/*
    Rock Paper Scissors
    By Aaron J. Aben

    Simple script that runs RPS in the browser console versus a CPU that selects
    randomly.
*/

/* Primary Game Logic */
const playButton = document.querySelector(".play");
playButton.addEventListener('click', playGame);

// Play a 5-round game of RPS
function playGame() {
    let humanScore = 0;
    let cpuScore = 0;

    for (let rounds = 5; rounds > 0; rounds--) {
        switch (playRound(getHumanChoice(), getComputerChoice())) {
            case -1:
                return;
            case 1:
                humanScore++;
                break;
            case 2:
                cpuScore++;
                break;
            case 0:
                break;
        }

        console.log('Current Score:');
        console.log(`You: ${humanScore}, CPU: ${cpuScore}`);
    }

    const pointDiff = humanScore - cpuScore;

    if (pointDiff > 0) {
        console.log("You Win!");
    } else if (pointDiff < 0) {
        console.log("You Lose!");
    } else {
        console.log("A Tie!");
    }
}

// Play a single round of RPS
// Returns:
// true if the player wins
// false if the player loses
function playRound(humanChoice, computerChoice) {
    let rpsToNum = (c) => {
        switch(c) {
            case "rock": return 0;
            case "paper": return 1;
            case "scissors": return 2;
            case null: return null;
        }
    };

    const choices = [humanChoice, computerChoice].map(rpsToNum);

    if (choices[0] == null) { // Account for case where cancel button is pressed
        return -1;
    }

    const decision = choices[0] - choices[1];

    if (decision == -2 || decision == 1) {
        console.log(`You win! Here, ${humanChoice} beats ${computerChoice}.`);
        return 1;
    } else if (decision == 2 || decision == -1) {
        console.log(`You lose! Here, ${computerChoice} beats ${humanChoice}.`);
        return 2;
    } else {
        console.log("Tie!");
        return 0;
    }
}

/* Computer choice selection */
function getComputerChoice() {
    const cpuNumChoice = Math.floor(Math.random() * 3);
    switch (cpuNumChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    } 
}

/* Human choice selection*/
function getHumanChoice() {
    let goodInput = false;
    while (!goodInput) {
        let humanChoice = prompt("Rock, Paper, or Scissors?");

        if (humanChoice == null) {
            return null
        }
        
        humanChoice = humanChoice.trim().toLowerCase();
        switch (humanChoice) {
            case "r": // Taking advantage of switch fall-through instead of using if-else
            case "rock":
                return "rock";
            case "p":
            case "paper":
                return "paper";
            case "s":
            case "scissors":
                return "scissors";
            default:
                console.log("That is not a valid option! Please choose rock, paper, or scissors.");
        }
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