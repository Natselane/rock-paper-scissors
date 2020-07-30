// Which options win
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

let roundCount = 0;
let compScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll(".choices button");
const playerField = document.querySelector(".playerField");
const computerField = document.querySelector(".computerField");
const playerPoints = document.querySelector("#playerPoints");
const compPoints = document.querySelector("#compPoints");
const notice = document.querySelector("#notice");
const reset = document.querySelector("#reset");
const round = document.querySelector("#round");

// Add image to player field
function playerPlay(playerChoice) {
    playerField.innerHTML = `<img src="./images/${playerChoice}.jpg" alt="">`
    return playerChoice;
}

// Computer choose by random, add image to computer field
function computerPlay () {
    const choices = ["rock", "paper", "scissors"];
    let random;

    random = Math.floor(Math.random() * choices.length);
    computerChoice = choices[random];
    computerField.innerHTML = `<img src="./images/${computerChoice}.jpg" alt="">`
    return computerChoice;
};

// Add points and notice
function addPoints(winner) {
    if (winner == "computer") {
        compScore++;
        console.log({compScore})
        compPoints.innerText = compScore;
        notice.innerText = "Computer +1 point";
    } else if (winner == "player") {
        playerScore++;
        console.log({playerScore});
        playerPoints.innerText = playerScore;
        notice.innerText = "Player +1 point";
    }
}

// Reset points
function resetPoints() {
    compScore = 0;
    playerScore = 0;
    roundCount = 0;
    playerPoints.innerText = 0;
    compPoints.innerText = 0;
    notice.innerText = "";
    round.innerText = "";
    buttons.forEach(button => button.disabled = false);
}

// Play one round
function playRound(playerChoice) {
    const playerSelection = playerPlay(playerChoice);
    const computerSelection = computerPlay();
    let winningChoice;
    console.log({computerSelection, playerSelection});
 
    roundCount++;
    round.innerText = roundCount; 
    console.log({roundCount});
    // A draw
    if (computerSelection == playerSelection) {
        console.log("draw");
        notice.innerHTML = "It's a draw";
        return "draw";
    } else {
        // Which option wins
        wins.forEach(win => {
            if(win["choices"].includes(computerSelection) && win["choices"].includes(playerSelection)) 
            {   
                winningChoice = win["win"];
            };
        });
    };

    // Who wins - player or computer
    if (winningChoice == computerSelection) {
        return "computer"
    } else {
        return "player";
    }
};

// Loop through buttons, when it's clicked execute the code
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.innerText.toLowerCase();
        const winner = playRound(playerChoice);
        console.log({winner});
        addPoints(winner);

        if (compScore == 5) {
            notice.innerText = "Computer won!";
            buttons.forEach(button => button.disabled = true);
        } else if (playerScore == 5) {
            notice.innerText = "Player won!";
            buttons.forEach(button => button.disabled = true);
        }
    })
}); 

reset.addEventListener("click", () => {
    resetPoints();
});