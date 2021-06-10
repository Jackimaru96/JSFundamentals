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
const correctNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = correctNum;

// Check! button event + DOM manipulation
document.querySelector('.check').addEventListener('click', function () {
  const userGuessValue = document.querySelector('.guess').value;
  console.log(userGuessValue);

  let wrongGuess = true;

  if (!userGuessValue) {
    document.querySelector('.message').textContext = 'No number input 😑';
    wrongGuess = false;
  } else if (userGuessValue === correctNum) {
    document.querySelector('.message').textContent = 'Correct Number! 😁';
    wrongGuess = false;
  } else if (userGuessValue > correctNum) {
    document.querySelector('.message').textContent = 'Number is too high! ⬆️';
  } else if (userGuessValue < correctNum) {
    document.querySelector('.message').textContent = 'Number is too low! ⬇️';
  }

  if (wrongGuess && score > 0) {
    score -= 1;
    document.querySelector('.score').textContent = score;
  }

  if (score == 0) {
    document.querySelector('.message').textContent = 'You lose! 😢';
  }
});

// Function needs to be added; this is called EventHandler
