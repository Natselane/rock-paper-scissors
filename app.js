// Rock > scissors
// Paper > rock
// Scissors > paper
let playerScore = 0;
let computerScore = 0;
let winner;

// Computer chooses by random 
function computerPlay () {
    let computerChoice;
    let random;
    let choices = ["rock", "paper", "scissors"];
    random = Math.floor(Math.random() * choices.length);
    return choices[random];
};

// One round of game
function playRound() {
    const wins = [
        { 
            choices: ["rock", "scissors"],
            win: "rock" 
        },
        {
            choices: ["paper", "rock"],
            win: "paper"
        },
        {
            choices: ["scissors", "paper"],
            win: "scissors"
        }
    ];

    let winnerChoice;
    let winner;
    const computerSelection = computerPlay(); 
    const playerSelection = computerPlay();


    // Decides who wins

    // A draw
    if (computerSelection == playerSelection) {
        console.log(computerSelection, playerSelection);
        return "it's a draw";
    } 
    // Which option wins
    else {
        for(let i = 0; i < wins.length; i++) {
            if (wins[i]["choices"].includes(computerSelection) && wins[i]["choices"].includes(playerSelection)) {
                winnerChoice = wins[i]["win"];
            }
        }
    };

    // Who chose winner
    if (computerSelection == winnerChoice) {
        return winner = "computer";
    } else {
        return winner = "player";
    }
}

function game() {
    let winner;
    computerScore = 0;
    playerScore = 0;
    while (playerScore < 5 && computerScore < 5)
    {   
        winner = playRound();
        if (winner == "computer") {
            computerScore++;
            console.log("comp " + computerScore);
        } else if (winner == "player") {          
            playerScore++;
            console.log("player " + playerScore);
        };
    };
    
    if (playerScore == 5) {
        return winner = "player";
    } else {
        return winner = "computer";
    }
}


console.log(game());