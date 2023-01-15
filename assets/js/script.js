/*
This code sets variables for the
scoreboard.
*/
let userScore = 0;
let computerScore = 0;
let userScoreValue = document.getElementById("user-score-value");
let computerScoreValue = document.getElementById("computer-score-value");

/*
This code executes functionality
of the reset button that re-sets
the scoreboard.
*/
function resetScore() {
    userScore = 0;
    computerScore = 0;
    userScoreValue.innerHTML = userScore;
    computerScoreValue.innerHTML = computerScore;
    let result = document.getElementById("result");
    result.innerHTML = "";
  }

/*
This code executes basic game logic
& displays the result of the current 
round to the scoreboard.
*/
function play(userChoice) {
    let choices = ["rock", "paper", "scissors", "lizard", "spock"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = document.getElementById("result");

    if (userScore >= 10 || computerScore >= 10) {
        alert("Game over!");
        return;
    }
   
    
    if (userChoice === computerChoice) {
        result.innerHTML = "It's a tie!";
    } else if (
        (userChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
        (userChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
        (userChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
        (userChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
        (userChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock"))
    ) {
        result.innerHTML = "You win! " + userChoice + " beats " + computerChoice + ".";
        userScore++;
        userScoreValue.innerHTML = userScore;
    } else {
        result.innerHTML = "You lose! " + computerChoice + " beats " + userChoice + ".";
        computerScore++;
        computerScoreValue.innerHTML = computerScore;
    }
}

