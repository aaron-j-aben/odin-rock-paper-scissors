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

/* CPU selection testing code */
function testGetComputerChoice() {
    let rocks = 0;
    let papers = 0;
    let scissors = 0;

    for (let i = 0; i < 100; i++) {
        try {
            switch(getComputerChoice) {
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