// Generate a random number between 1 and 100
let targetNumber = Math.floor(Math.random() * 100) + 1;

// Initialize the number of guesses to 0
let numGuesses = 0;

// Function to check the user's guess
function checkGuess() {
  // Get the user's guess from the input field
  const guess = parseInt(document.getElementById('guessInput').value);

  // Increment the number of guesses
  numGuesses++;

  // Calculate the difference between the guess and the target number
  const difference = Math.abs(targetNumber - guess);

  // Check if the guess is correct
  if (guess === targetNumber) {
    // Display a success message with the number of guesses
    const message = `Congratulations, you guessed the number in ${numGuesses} guesses!`;
    document.getElementById('message').innerHTML = message;
    
    // Show the restart button
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Play Again';
    restartButton.addEventListener('click', restartGame);
    document.getElementById('message').appendChild(restartButton);
  } else if (difference <= 10) {
    // Display a message indicating the user is getting closer to the target number
    document.getElementById('message').innerHTML = 'You\'re getting closer!';
  } else if (guess < targetNumber) {
    // Display a message indicating the guess was too low
    document.getElementById('message').innerHTML = 'Too low, try again.';
  } else {
    // Display a message indicating the guess was too high
    document.getElementById('message').innerHTML = 'Too high, try again.';
  }
}

// Function to restart the game
function restartGame() {
  // Generate a new random number
  targetNumber = Math.floor(Math.random() * 100) + 1;

  // Reset the number of guesses
  numGuesses = 0;

  // Clear the input field and message
  document.getElementById('guessInput').value = '';
  document.getElementById('message').innerHTML = '';

  // Remove the restart button
  const restartButton = document.querySelector('#message button');
  if (restartButton) {
    restartButton.parentNode.removeChild(restartButton);
  }
}

// Add event listener to input field for "Enter" key
const guessInput = document.getElementById('guessInput');
guessInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    checkGuess();
  }
});
