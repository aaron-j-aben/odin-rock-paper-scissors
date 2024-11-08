/*
    Rock Paper Scissors
    By Aaron J. Aben

    Simple script that runs RPS in the browser console versus a CPU that selects
    randomly.
*/

/* Primary Game Logic */
const playButton = document.querySelector(".play");
const rpsChoiceBtns = document.querySelectorAll('.rpsChoices > button');
const scoreDisplay = document.querySelector('#score');
const outcomeDisplay = document.querySelector('#finalOutcome');

playButton.addEventListener('click', playGame);

// Play a 5-round game of RPS
function playGame() {
    scoreDisplay.textContent = '';
    outcomeDisplay.textContent = '';
    let humanScore = 0;
    let cpuScore = 0;

    // Define function here so it isn't in memory unless player is playing the game
    let handleRpsClick = function(e) {
        const rpsChoice = e.target.value;
        switch (playRound(rpsChoice, getComputerChoice())) {
            case 1:
                humanScore++;
                break;
            case 2:
                cpuScore++;
                break;
            case 0:
                break;
        }

        scoreDisplay.textContent = `You: ${humanScore}, CPU: ${cpuScore}`;

        if (humanScore == 5) {
            endGame('You Win!');
            return;
        } else if (cpuScore == 5) {
            endGame('You Lost :(');
            return;
        }
    }

    for (const rpsChoiceBtn of rpsChoiceBtns) {
        rpsChoiceBtn.addEventListener('click', handleRpsClick);
    }

    function endGame(outcomeMessage) {
        outcomeDisplay.textContent = outcomeMessage + ' Press play to restart';
        for (const rpsChoiceBtn of rpsChoiceBtns) {
            rpsChoiceBtn.removeEventListener('click', handleRpsClick);
        }
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

    // Account for case where cancel button is pressed
    // Propagate up for game logic to handle
    if (choices[0] == null) { 
        return -1;
    }

    const decision = choices[0] - choices[1];

    if (decision == -2 || decision == 1) {
        outcomeDisplay.textContent = `You win the round! Here, ${humanChoice} beats ${computerChoice}.`;
        return 1;
    } else if (decision == 2 || decision == -1) {
        outcomeDisplay.textContent = `You lose the round! Here, ${computerChoice} beats ${humanChoice}.`;
        return 2;
    } else {
        outcomeDisplay.textContent = `A tie on ${humanChoice}!`;
        return 0;
    }
}

/* Computer choice selection */
function getComputerChoice() {
    const cpuNumChoice = Math.floor(Math.random() * 3);
    // maps [0,1,2] to [r,p,s]
    switch (cpuNumChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    } 
}

/* Human choice selection */
function getHumanChoice() {
    let goodInput = false;
    while (!goodInput) {
        let humanChoice = prompt("Rock, Paper, or Scissors?");

        // prompt is null if cancel button/escape is pressed
        // propagate this choice up
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