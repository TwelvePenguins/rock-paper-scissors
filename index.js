const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const actionables = document.querySelector(".actionables");
const displayedScoreline = document.querySelector("#scoreline")
const displayedMessage = document.querySelector("#message")

let message = ""
let scoreline = "Results"

actionables.addEventListener("click", (event) => {
    message = playRound(event.target.id, getComputerChoice());
    displayedMessage.textContent = message;
});



function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor((Math.random() * 10) % 3);
    return options[randomChoice];
}

function playRound(playerSelection, computerSelection) {

    let outcome = "";
    let message = "";

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