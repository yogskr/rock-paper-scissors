'use strict';

// Get the player choice
const getPlayerChoice = () => {
  let playerChoice = prompt("What's your weapon?").toLowerCase();
  if (
    playerChoice == 'rock' ||
    playerChoice == 'paper' ||
    playerChoice == 'scissors'
  ) {
    return playerChoice;
  } else {
    alert('Your weapon must be: Rock, Paper, or Scissors');
  }
};

// Get a random string: 'rock', 'paper', 'scissors' from computer
const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
};

// Store the player and computer scores
let playerScore = 0;
let computerScore = 0;

// Play one round
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == 'rock') {
    console.log(`You chose ${playerSelection}.`);
    switch (computerSelection) {
      case 'rock':
        return "It's a tie!";
      case 'paper':
        computerScore++;
        return 'Computer wins! Paper beats rock.';
      case 'scissors':
        playerScore++;
        return 'You win! Rock beats scissors.';
    }
  } else if (playerSelection == 'paper') {
    console.log(`You chose ${playerSelection}.`);
    switch (computerSelection) {
      case 'rock':
        playerScore++;
        return 'You win! Paper beats rock.';
      case 'paper':
        return "It's a tie!";
      case 'scissors':
        computerScore++;
        return 'Computer wins! Scissors beat paper.';
    }
  } else if (playerSelection == 'scissors') {
    console.log(`You chose ${playerSelection}.`);
    switch (computerSelection) {
      case 'rock':
        computerScore++;
        return 'Computer wins! Rock beats scissors.';
      case 'paper':
        playerScore++;
        return 'You win! Scissors beat paper.';
      case 'scissors':
        return "It's a tie!";
    }
  }
};

// Play 5 game rounds
const game = () => {
  for (let i = 0; i < 5; i++) {
    // Run the game 5 times
    console.log(playRound(getPlayerChoice(), getComputerChoice()));

    // Sum up the total score
    console.log(`Player Score = ${playerScore}`);
    console.log(`Computer Score = ${computerScore}`);
  }

  // Announce the winner
  if (playerScore > computerScore) {
    console.log(
      `Congratulations! It's ${playerScore} vs. ${computerScore}. You win the game.`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `Alas! It's ${playerScore} vs. ${computerScore}. You may try again.`
    );
  } else if (playerScore === computerScore) {
    console.log(
      `Is this a coincidence? It's ${playerScore} vs ${computerScore}. The game is a tie.`
    );
  }
};

// Uncomment game() to initiate the game
// game();
