'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
let highscore = 0;
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const score = document.querySelector('.score');
const body = document.querySelector('body');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(guess.value);

  if (!guessValue) {
    displayMessage('Введи цифру!');
  } else if (guessValue === secretNumber) {
    displayMessage('Ура, ты угадал!');
    number.textContent = secretNumber;

    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (scoreValue > highscore) {
      highscore = scoreValue;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessValue !== secretNumber) {
    if (scoreValue > 1) {
      guessValue > secretNumber
        ? displayMessage('Слишком большая цифра!')
        : displayMessage('Слишком маленькая цифра!');
      scoreValue--;
      score.textContent = scoreValue;
    } else {
      displayMessage('Ты проиграл!');
      score.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  scoreValue = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  guess.value = '';
  displayMessage('Начинаю угадывать...');
  score.textContent = scoreValue;
  number.textContent = '?';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem;';
});
