function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    return options[randomChoice];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {

    let outcome = "";
    let message = "";

    console.log(computerSelection)

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
        console.log("reached 1")
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
        return "It appears that this homosapien lacks the knowledge to play rock paper scissors. What an interesting phenomenon!"
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

    return message
}

console.log(playRound("rock", "Rock"))