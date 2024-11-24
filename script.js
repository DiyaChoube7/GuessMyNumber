const randomNumber = Math.floor(Math.random() * 100) + 1; 
let attempts = 0;

const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const restartBtn = document.getElementById('restart-btn');

guessBtn.addEventListener('click', () => {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a number between 1 and 100!';
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (userGuess === randomNumber) {
    message.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts!`;
    guessBtn.style.display = 'none';
    restartBtn.style.display = 'inline-block';
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low! Try again.';
  } else {
    message.textContent = 'Too high! Try again.';
  }
});

restartBtn.addEventListener('click', () => {
  location.reload(); 
});
