function play(userChoice) {
    let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = document.getElementById('result');

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
      } else {
        result.innerHTML = "You lose! " + computerChoice + " beats " + userChoice + ".";
      }
}
