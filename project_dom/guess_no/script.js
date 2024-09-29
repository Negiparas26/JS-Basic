let random = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const gussesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number more than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayguess(guess);
      displaymessage(`game over.random number was ${random}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === random) {
    displaymessage(`you guessed it right`);
    endgame();
  } else if (guess < random) {
    displaymessage(`number is toooo low`);
  } else if (guess > random) {
    displaymessage(`number is too high`);
  }
}

function displaymessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayguess(guess) {
  userInput.value = '';
  gussesSlot.innerHTML += `${guess}: `;
  numGuess++;
  if (numGuess != 12) {
    remaining.innerHTML = `${11 - numGuess}`;
  }
}

function newgame() {
  const newgamebutton = document.querySelector('#newGame');
  newgamebutton.addEventListener('click', function (e) {
    random = Math.floor(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    gussesSlot.innerHTML = '';
    lowOrHi.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startover.removeChild(p);
    playgame = true;
  });
}

function endgame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> start new game </h2>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}
