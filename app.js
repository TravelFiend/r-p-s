import checkResult, { getRandomThrow } from './get-random-throw.js';

const computerThrow = document.getElementById('computer-throw');
const userThrow = document.getElementById('user-throw');
const winSpan = document.getElementById('win');
const loseSpan = document.getElementById('lose');
const drawSpan = document.getElementById('draw');
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const outcomeMessage = document.getElementById('outcome-message');
const twoThrows = document.getElementById('twoThrows');

const roc = document.createElement('img');
roc.className = "smallPics";
roc.src = './assets/rock.jpg';
const pape = document.createElement('img');
pape.className = "smallPics";
pape.src = './assets/paper.jpg';
const sciss = document.createElement('img');
sciss.className = "smallPics";
sciss.src = './assets/scissors.jpg';

let winCount = 0;
let loseCount = 0;
let drawCount = 0;

let randoThrow = getRandomThrow();

// set a function that shows an image of which throw was thrown by comp
const showCompThrow = (randoThrow) => {
    if (randoThrow === 'rock'){
        computerThrow.appendChild(roc);
    } else if (randoThrow === 'paper'){
        computerThrow.appendChild(pape);
    } else {
        computerThrow.appendChild(sciss);
    }
};

// set a function that shows an image of which throw was thrown by user
const showUserThrow = () => {
    const userChoice = document.querySelector('input:checked').value;
    if (userChoice === 'rock') {
        userThrow.appendChild(roc);
    } else if (userChoice === 'paper') {
        userThrow.appendChild(pape);
    } else {
        userThrow.appendChild(sciss);
    }
};


const updateSpans = () => {
    showCompThrow();
    showUserThrow();
    winSpan.textContent = winCount;
    loseSpan.textContent = loseCount;
    drawSpan.textContent = drawCount;
};

// set a function for reset button
const hardReset = () => {
    winCount = 0;
    loseCount = 0;
    drawCount = 0;
    const images = document.getElementsByClassName('smallPics');
    twoThrows.removeChild(images);
    updateSpans();
};

// set a function for playing a round
const playARound = () => {
    const userChoice = document.querySelector('input:checked').value;
    const computerChoice = getRandomThrow();
    const attempt = checkResult(userChoice, computerChoice);
    console.log(computerChoice);
    if (attempt === 'win'){
        winCount++;
    } else if (attempt === 'lose') {
        loseCount++;
    } else if (attempt === 'draw') {
        drawCount++;
    }
    outcomeMessage.textContent = attempt;
    updateSpans();
}

// Event listeners
resetButton.addEventListener('click', hardReset);
playButton.addEventListener('click', playARound);