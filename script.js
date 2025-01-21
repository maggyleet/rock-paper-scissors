function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors:");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        alert("Invalid choice! Please enter 'rock', 'paper', or 'scissors'.");
        return humanChoice; // Prompt again
    }
}

let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`You: ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`)
        console.log(`Computer: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`)
        console.log("Tie.");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You: ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`)
        console.log(`Computer: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`)
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`);
        humanScore++;
    } else {
        console.log(`You: ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`)
        console.log(`Computer: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`)
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`);
        computerScore++;
    }
    console.log("Currrent Score:")
    console.log(`Your Score: ${humanScore} Computer Score: ${computerScore}`)
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round: ${i}`);
        playRound(getHumanChoice(), getComputerChoice())
    }
    console.log("FINAL RESULTS:")
    console.log(`Your Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)
    if (humanScore == computerScore)
        console.log("Game is a tie!")
    else if (humanScore > computerScore)
        console.log("YOU WIN!")
    else
        console.log("YOU LOSE!")

}
playGame()




