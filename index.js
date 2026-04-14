const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const actionables = document.querySelector(".actionables");
const displayedMessage = document.querySelector("#message")
const displayedPenguinScore = document.querySelector("#penguin-score")
const displayedPlayerScore = document.querySelector("#player-score")
const resetButton = document.querySelector("#reset")

let message = ""
let outcome = "";
let penguinScore = 0
let playerScore = 0

actionables.addEventListener("click", (event) => {
    message = playRound(event.target.id, getComputerChoice());
    displayedMessage.textContent = message;

    if (outcome == "lose") {
        penguinScore += 1;
        displayedPenguinScore.textContent = penguinScore;
    } else if (outcome == "win") {
        playerScore += 1;
        displayedPlayerScore.textContent = playerScore;
    };
});

resetButton.addEventListener("click", () => {
    penguinScore = 0;
    playerScore = 0;

    displayedPenguinScore.textContent = penguinScore;
    displayedPlayerScore.textContent = playerScore;
    displayedMessage.textContent = "";
});



function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor((Math.random() * 10) % 3);
    return options[randomChoice];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock") {
        switch (computerSelection) {
            case "Rock": 
                outcome = "tied";
                break;
            case "Scissors": 
                outcome = "win";
                break;
            case "Paper": 
                outcome = "lose";
                break;
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        switch (computerSelection) {
            case "Rock": 
                outcome = "win";
                break;
            case "Scissors": 
                outcome = "lose";
                break;
            case "Paper": 
                outcome = "tied";
                break;
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        switch (computerSelection) {
            case "Rock": 
                outcome = "lose";
                break;
            case "Scissors": 
                outcome = "tied";
                break;
            case "Paper": 
                outcome = "win";
                break;

        }
    } else {
        return "It appears that this homosapien lacks the knowledge to play rock paper scissors, also known in jargon as paw flipper pi. What an interesting phenomenon!";
    }
    console.log(outcome)
    switch (outcome) {
        case "lose": 
            message = `You lose! ${computerSelection} beats ${playerSelection}. Penguins are so cool B)`;
            break;
        case "win":
            message = `You win! ${playerSelection} beats ${computerSelection}. You better build the penguin a snowman!`;
            break;
        case "tied": 
            message = `You're...tied. You both chose ${playerSelection}. The penguin demands a rematch!`;
            break;
    }

    return message;
}

// function game() {
//     console.log(getComputerChoice)
//     console.log(playRound(playerInput, getComputerChoice()));
// }