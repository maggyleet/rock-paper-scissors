let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  let result = "";

  if (playerSelection === computerSelection) {
    result = `It's a tie! Both chose ${playerSelection}.`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    result = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    result = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  updateScore(result);
}

function updateScore(result) {
  const resultDiv = document.getElementById("result");
  const scoreDiv = document.getElementById("score");

  resultDiv.textContent = result;
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    declareWinner();
  }
}

function declareWinner() {
  const resultDiv = document.getElementById("result");
  const buttons = document.querySelectorAll("button");

  const winner =
    playerScore === 5
      ? "Congratulations! You are the winner!"
      : "Game over! The computer wins.";

  resultDiv.textContent = `${winner} Click "Play Again" to restart.`;

  buttons.forEach((button) => (button.disabled = true));

  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "Play Again";
  playAgainButton.classList.add("play-again");
  document.getElementById("game-container").appendChild(playAgainButton);

  playAgainButton.addEventListener("click", resetGame);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  const resultDiv = document.getElementById("result");
  const scoreDiv = document.getElementById("score");
  const playAgainButton = document.querySelector(".play-again");
  const buttons = document.querySelectorAll("button");

  resultDiv.textContent = "";
  scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  playAgainButton.remove();

  buttons.forEach((button) => (button.disabled = false));
}

// Adding event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("Rock"));
document.getElementById("paper").addEventListener("click", () => playRound("Paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("Scissors"));
