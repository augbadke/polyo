const root = document.querySelector(':root');
const board = document.getElementById('board');
const gameNumber = document.querySelector('.gameN');
const conclusionTime = document.querySelector('.time');
const hints = document.querySelector('.hintsUsed');
const puzzlesSolved = document.querySelector('.puzzles_solved');
const currentStreak = document.querySelector('.current_streak');
const maxStreak = document.querySelector('.max_streak');
const distribuition = document.querySelectorAll('.bar');
const totalHints = document.querySelector('.totalHints');
const hintBtn = document.querySelector('.hintBtn');
const hintN = document.querySelector('.hintN');
const advise = document.querySelector('#board-container p');
const listBtn = document.querySelector('.listBtn');

const modalHelp = new Modal('.modal-help','.close', '.helpBtn');
const modalStats = new Modal('.modal-stats','.close-stats', '.statsBtn');
new Modal('.modal-contact','.close-contact', '.contactBtn');

listBtn.addEventListener('click', ()=>{
  window.location = `./list.html`
})
hintBtn.addEventListener('click', showHint)

let screenWidth = window.matchMedia("(min-width: 450px)");

let gridSize;

const urlParams = new URLSearchParams(window.location.search);
const targetDate = urlParams.get('id')
let todayDate = null;

const date = new Date();
const verifyDate = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;

if (new Date(targetDate) < new Date(verifyDate)) {
  todayDate = targetDate;
}

function handleBoardSize(screenWidth) {
  if (screenWidth.matches) {
    root.style.setProperty('--piece-size', '50px');
    gridSize = 50;
  } else {
    root.style.setProperty('--piece-size', '35px');
    gridSize = 35;
  };
};

handleBoardSize(screenWidth);

gameNumber.innerText = games[todayDate].n;

const stats = JSON.parse(localStorage.getItem('@polyo-history:')) || {
  lastDate: '0000-00-00',
  interactDate: '0000-00-00',
  initialTime: null,
  lastGamePlayed: 0,
  distribuition: [0,0,0,0,0,0],
  totalHints: 0,
  var1: null,
  gamesList: [],
};

stats[games[todayDate].n] ? null : stats[games[todayDate].n] = {
  time: "0:00",
  hints: 0,
  isSolved: false,
}

if (stats[games[todayDate].n].isSolved) {
  modalStats.open();
}

setStats();

const solution = games[todayDate].solution;
const polyominos = games[todayDate].polyominos;

const numCols = solution[0].length;
const numRows = solution.length;

board.style.width = `${gridSize*numCols}px`;
board.style.height = `${gridSize*numRows}px`;

function createBoard() {
  for (let x = 0; x < solution.length; x++) {
    for (let y = 0; y < solution[0].length; y++) {
      if (solution[x][y]>0) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.left = y*gridSize + 'px';
        grid.style.top = x*gridSize + 'px';
        board.appendChild(grid);
      };
    }
  };
};

const colors = [
  
  ["hsl(267, 29%, 48%)","hsl(267, 100%, 50%)"],
  ["hsl(199, 29%, 48%)","hsl(199, 100%, 50%)"],
  ["hsl(144, 29%, 48%)","hsl(144, 100%, 50%)"],
  ["hsl(62, 28%, 48%)","hsl(62, 100%, 50%)"],
  ["hsl(0, 28%, 48%)","hsl(0, 100%, 50%)"],
  ["hsl(310, 28%, 48%)","hsl(310, 100%, 50%)"],
  ["hsl(26, 28%, 48%)","hsl(26, 100%, 50%)"],
  ["hsl(178, 28%, 48%)","hsl(178, 100%, 50%)"],
  ["hsl(223, 28%, 48%)","hsl(223, 100%, 50%)"],
  ["hsl(83, 28%, 48%)","hsl(83, 100%, 50%)"],
  ["hsl(164, 28%, 48%)","hsl(164, 100%, 50%)"],
  ["hsl(352, 28%, 38%)","hsl(352, 90%, 38%)"],
  ["hsl(280, 28%, 70%)","hsl(280, 100%, 72%)"],
  // ["",""],
];

function startGame() {
  createBoard();

  const boardState = solution.map(row => row.map(element => element == 1 ? 0 : "X"));

  for (let i = 0; i < polyominos.length; i++) {

    const piece = new Polyomino(board, boardState, polyominos[i], gridSize, colors[i]);

    piece.setOnBoardStateChange(() => {
      if (Polyomino.pieceInBoard === polyominos.length) {;
        endGame();
      };
    });
  };
};

let currentHintIndex = stats[games[todayDate].n].hints;

for (let i = 0; i < stats[games[todayDate].n].hints; i++) {
  loadHint(i)
}

if (currentHintIndex < games[todayDate].var.length-1) {
  hintN.innerText = currentHintIndex+1;
} else {
  hintBtn.style.display = 'none';
}

function showHint() {
  var currentHint = games[todayDate].var[currentHintIndex];
  
  if (currentHintIndex < games[todayDate].var.length-1) {
    for (let i=0; i<currentHint[0].length; i++) {
      const hint = document.createElement('div');
      hint.classList.add('hint_highlight');
      hint.style.left = currentHint[1][i]*gridSize + 'px';
      hint.style.top = currentHint[0][i]*gridSize + 'px';
      hint.style.backgroundColor = colors[currentHintIndex][1];
      board.appendChild(hint);
    }

    currentHintIndex++;

    if (!stats[games[todayDate].n].isSolved) {
      stats[games[todayDate].n].hints = currentHintIndex;
      stats.interactDate = todayDate;
      localStorage.setItem('@polyo-history:', JSON.stringify(stats));
    }

    if (currentHintIndex < games[todayDate].var.length-1) {
      hintN.innerText = currentHintIndex+1;
    } else {
      hintBtn.style.display = 'none';
    }
  }
}

function loadHint(j) {
  var currentHint = games[todayDate].var[j];

  for (let i=0; i<currentHint[0].length; i++) {
    const hint = document.createElement('div');
    hint.classList.add('hint_highlight');
    hint.style.left = currentHint[1][i]*gridSize + 'px';
    hint.style.top = currentHint[0][i]*gridSize + 'px';
    hint.style.backgroundColor = colors[j][1];
    board.appendChild(hint);
  }
}

function endGame() {

  advise.style.display = "none";

  if (!stats[games[todayDate].n].isSolved) {
    const endTime = new Date();
    const elapsedTime = endTime - Polyomino.initalTime + currentHintIndex*60000;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = String(totalSeconds - minutes*60).padStart(2,'0');
    const time = `${String(minutes).padStart(2,'0')}:${seconds}`;
   
    stats.gamesList.push(games[todayDate].n)

    stats.lastDate = todayDate;
  
    if (totalSeconds <= 60) {
      stats.distribuition[0] += 1;
    } else if (totalSeconds <= 60*2) {
      stats.distribuition[1] += 1;
    } else if (totalSeconds <= 60*3) {
      stats.distribuition[2] += 1;
    } else if (totalSeconds <= 60*4) {
      stats.distribuition[3] += 1;
    } else if (totalSeconds <= 60*5) {
      stats.distribuition[4] += 1;
    } else if (totalSeconds > 60*5) {
      stats.distribuition[5] += 1;
    };
    stats.totalHints = stats.totalHints + currentHintIndex;
    stats.lastGamePlayed = games[todayDate].n;
    stats[games[todayDate].n] = {
      time: time,
      hints: currentHintIndex,
      isSolved: true,
    }

    localStorage.setItem('@polyo-history:', JSON.stringify(stats));
  }

  setStats();

  modalStats.open();
  return;
}

function setStats() {
  conclusionTime.textContent = stats[games[todayDate].n].time;
  hints.textContent = stats[games[todayDate].n].hints;
}

startGame();