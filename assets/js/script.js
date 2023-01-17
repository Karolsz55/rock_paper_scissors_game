/*
Global variables.
*/
let userScore = 0;
let computerScore = 0;
let userScoreValue = document.getElementById("user-score-value");
let computerScoreValue = document.getElementById("computer-score-value");
let userChoiceBtn = null;
let computerChoiceBtn = null;

/*
This code executes functionality
of the reset button that re-sets
the scoreboard and removes highlights.
*/
function resetScore() {
    userScore = 0;
    computerScore = 0;
    let userScoreValue = document.getElementById("user-score-value");
    let computerScoreValue = document.getElementById("computer-score-value");
    let result = document.getElementById("result");
    userScoreValue.innerHTML = userScore;
    computerScoreValue.innerHTML = computerScore;
    result.innerHTML = "Make your choice!";
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("highlight-winner", "highlight-loser", "tie");
    }
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
    userChoiceBtn = document.getElementById(userChoice);
    computerChoiceBtn = document.getElementById(computerChoice);

    /* 
    Remove highlight-winner, highlight-loser, 
    tie class from all buttons after each round
    */
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("highlight-winner", "highlight-loser", "tie");
    }

    /* 
    Add highlight-winner, highlight-loser or 
    tie class to current user and computer choices 
    */

    if (userScore >= 5 || computerScore >= 5) {
        alert("Game over! Start again!");
        return;
        5
    }

    if (userChoice === computerChoice) {
        result.innerHTML = "It's a tie!";
        userChoiceBtn.classList.add("tie");
        computerChoiceBtn.classList.add("tie");

        /* 
        Game logic
        */
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
        userChoiceBtn.classList.add("highlight-winner");
        computerChoiceBtn.classList.add("highlight-loser");
    } else {
        result.innerHTML = "You lose! " + computerChoice + " beats " + userChoice + ".";
        computerScore++;
        computerScoreValue.innerHTML = computerScore;
        userChoiceBtn.classList.add("highlight-loser");
        computerChoiceBtn.classList.add("highlight-winner");
    }
}