'use strict';

// Three ways of selecting element by id/class
// document.getElementById('id');
// document.querySelector('#id');
// document.querySelector('className');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const curren0 = document.getElementById('current--0');
const curren1 = document.getElementById('current--1');
const btnRoll = document.getElementById('rollDiceBtn');
const btnHold = document.getElementById('holdBtn');
const btnReset = document.getElementById('resetBtn');
const btnReset1 = document.querySelector('#resetBtn');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let diceImg = document.getElementById('diceImg');
let diceValue = 0;
let currentScore = 0;
let isPlayer0Turn = true;
let isPlaying = true;

resetGame();

btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    const diceValue = rollDice();
    if (diceValue != 1) {
      addScore(diceValue);
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    holdScore();
  }
});

btnReset.addEventListener('click', function () {
  resetGame();
});

function addScore(value) {
  if (isPlayer0Turn) {
    currentScore += value;
    curren0.textContent = currentScore;
  } else {
    currentScore += value;
    curren1.textContent = currentScore;
  }
}

function resetGame() {
  score0.textContent = 0;
  score1.textContent = 0;
  curren0.textContent = 0;
  curren1.textContent = 0;
  currentScore = 0;
  isPlayer0Turn = true;
  isPlaying = true;
  diceImg.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
}

function rollDice() {
  diceValue = Math.trunc(Math.random() * 6) + 1;
  console.log(diceValue);

  diceImg.src = `dice-${diceValue}.png`;
  diceImg.classList.remove('hidden');
  return diceValue;
}

function holdScore() {
  let scoreNow = 0;
  if (isPlayer0Turn) {
    scoreNow = Number(score0.textContent);
    scoreNow += currentScore;
    score0.textContent = scoreNow;
  } else {
    scoreNow = Number(score1.textContent);
    scoreNow += currentScore;
    score1.textContent = scoreNow;
  }
  isPlaying = isStillPlaying();
  if (isPlaying) {
    switchPlayer();
  } else {
    diceImg.classList.add('hidden');
  }
}

function switchPlayer() {
  isPlayer0Turn ? (curren0.textContent = 0) : (curren1.textContent = 0);
  isPlayer0Turn = isPlayer0Turn ? false : true;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  currentScore = 0;
}

function isStillPlaying() {
  const playerNow = isPlayer0Turn ? player0 : player1;
  const playerScore = isPlayer0Turn
    ? Number(score0.textContent)
    : Number(score1.textContent);

  if (playerScore >= 10) {
    playerNow.classList.add('player--winner');
    return false;
  }

  return true;
}
