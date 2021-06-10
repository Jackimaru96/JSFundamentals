'use strict';

// document.querySelector (DOM manipulation)

/**
 * Accessing DOM properties
 */
// // Reading
// console.log(document.querySelector('.message').textContent);

// // Setting
// document.querySelector('.message').textContent = 'Correct Number! 😁';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 100;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Between 1 and 20 (inclusive)
let correctNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let gameRestart = true;

document.querySelector('.again').addEventListener('click', function () {
  gameRestart = true;
  score = 20;
  correctNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#000000f7';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
});

if ((gameRestart = true)) {
  // Check! button event + DOM manipulation
  document.querySelector('.check').addEventListener('click', function () {
    const userGuessValue = Number(document.querySelector('.guess').value);
    console.log(userGuessValue);

    let wrongGuess = true;

    if (!userGuessValue) {
      document.querySelector('.message').textContext = 'No number input 😑';
      wrongGuess = false;
    }
    // When player wins
    else if (userGuessValue === correctNum) {
      document.querySelector('.message').textContent = 'Correct Number! 😁';

      // Changing CSS Style
      document.querySelector('body').style.backgroundColor = '#60b347db';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = correctNum;

      checkHighScore(score, highscore);
      document.querySelector('.highscore').textContent = highscore;
      wrongGuess = false;
      gameRestart = false;
    }
    // guess more than number
    else if (userGuessValue > correctNum) {
      document.querySelector('.message').textContent = 'Number is too high! ⬆️';
    }
    // guess less than number
    else if (userGuessValue < correctNum) {
      document.querySelector('.message').textContent = 'Number is too low! ⬇️';
    }

    if (wrongGuess) {
      score -= 1;
      document.querySelector('.score').textContent = score;
    }

    if (score == 0) {
      document.querySelector('.message').textContent = 'You lose! 😢';
      gameRestart = false;
    }
  });
}

function checkHighScore(currentScore, highScore) {
  if (currentScore > highScore) {
    highscore = currentScore;
  }
}
// Function needs to be added; this is called EventHandler
