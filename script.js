'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Function call
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (num) {
  document.querySelector('.number').textContent = num;
};
const displayScore = function (s_core) {
  document.querySelector('.score').textContent = s_core;
};
const changeColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
//

// check number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when guess is empty
  if (!guess) {
    displayMessage('⛔ No Number');
  } else if (guess > 20) {
    displayMessage('⚠️ Between 1 to 20');
  }
  // when guess is correct
  else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('🎉 Correct number');
    changeColor('#60b347');
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      changeColor('#ff7b7b');
      displayMessage('😭 You lost the game');
      displayScore(0);
    }
  }
});

// Play Again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  changeColor('#222');
  displayScore(score);
  displayMessage('🤔 Start guessing...');
  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
