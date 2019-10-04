import checkResult, { getRandomThrow } from './get-random-throw.js';

const winSpan = document.getElementById('win');
const loseSpan = document.getElementById('lose');
const drawSpan = document.getElementById('draw');
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const outcomeMessage = document.getElementById('outcome-message');
const computerThrow = document.getElementsByClassName('computer-throw');
const userThrow = document.getElementsByClassName('user-throw');
const computerRockPic = document.getElementById('computer-rock-pic');
const computerPaperPic = document.getElementById('computer-paper-pic');
const computerScissorsPic = document.getElementById('computer-scissors-pic');
const userRockPic = document.getElementById('user-rock-pic');
const userPaperPic = document.getElementById('user-paper-pic');
const userScissorsPic = document.getElementById('user-scissors-pic');

const roc = document.createElement('img');
roc.className = 'smallPics';
roc.src = './assets/rock.jpg';
const pape = document.createElement('img');
pape.className = 'smallPics';
pape.src = './assets/paper.jpg';
const sciss = document.createElement('img');
sciss.className = 'smallPics';
sciss.src = './assets/scissors.jpg';

winSpan.textContent = 0;
loseSpan.textContent = 0;
drawSpan.textContent = 0;
let winCount = 0;
let loseCount = 0;
let drawCount = 0;

// set a function that shows an image of which throw was thrown by comp
const showComputerThrowImg = (compPic) => {
    if (compPic === 'rock') {
        computerRockPic.classList.remove('hidden');
    } else if (compPic === 'paper') {
        computerPaperPic.classList.remove('hidden');
    } else {
        computerScissorsPic.classList.remove('hidden');
    }
};

const hideComputerThrowImage = () => {
    computerRockPic.classList.add('hidden');
    computerPaperPic.classList.add('hidden');
    computerScissorsPic.classList.add('hidden');
}

// set a function that shows an image of which throw was thrown by user
const showUserThrowImg = (userPic) => {
    if (userPic === 'rock') {
        userRockPic.classList.remove('hidden');
    } else if (userPic === 'paper') {
        userPaperPic.classList.remove('hidden');
    } else if (userPic === 'scissors') {
        userScissorsPic.classList.remove('hidden');
    } else {
        return;
    }
};

const hideUserThrowImage = () => {
    userRockPic.classList.add('hidden');
    userPaperPic.classList.add('hidden');
    userScissorsPic.classList.add('hidden');
}

// set a function for updating spans
const updateSpans = () => {
    winSpan.textContent = winCount;
    loseSpan.textContent = loseCount;
    drawSpan.textContent = drawCount;
};

const updateImages = (userThrow, computerThrow) => {
    showComputerThrowImg(computerThrow);
    showUserThrowImg(userThrow);
};

// set a function for reset button
const hardReset = () => {
    winCount = 0;
    loseCount = 0;
    drawCount = 0;
    outcomeMessage.textContent = '';
    updateSpans();
    hideComputerThrowImage();
    hideUserThrowImage();
};

// set a function for playing a round
const playARound = () => {
    hideComputerThrowImage();
    hideUserThrowImage();
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
    updateImages(userChoice, computerChoice);
};

// Event listeners
resetButton.addEventListener('click', hardReset);
playButton.addEventListener('click', playARound);