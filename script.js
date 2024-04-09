const root = document.querySelector(':root');
const board = document.getElementById('board');
const conclusionTime = document.querySelector('.time');
const puzzlesSolved = document.querySelector('.puzzles_solved');
const currentStreak = document.querySelector('.current_streak');
const maxStreak = document.querySelector('.max_streak');
const distribuition = document.querySelectorAll('.bar');
const gameNumber = document.querySelector('h2')

const modalHelp = new Modal('.modal-help','.close', '.helpBtn');
const modalStats = new Modal('.modal-stats','.close-stats', '.statsBtn');
new Modal('.modal-contact','.close-contact', '.contactBtn');

let screenWidth = window.matchMedia("(min-width: 450px)");

let gridSize;

const date = new Date();
const todayDate = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;

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

gameNumber.innerText = `Daily game #${games[todayDate].n}`;

const stats = JSON.parse(localStorage.getItem('@fitme-stats:')) || {
  fisrtTime: true,
  lastDate: '0000-00-00',
  lastGamePlayed: 1,
  time: "00:00",
  puzzleSolved: 0,
  currentStreak: 0,
  maxStreak: 0,
  distribuition: [0,0,0,0,0,0],
};

if (stats.fisrtTime) {
  modalHelp.open();
};

if (todayDate == stats.lastDate) {
  modalStats.open();
} else {
  stats.time = "00:00";
};
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
        verifySolution(Polyomino.boardState, solution, stats, todayDate);
      };
    });
  };
};

function verifySolution(matrix1, matrix2, stats, todayDate) {

  if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
    return;
  };

  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[0].length; j++) {
      if (matrix1[i][j] != matrix2[i][j]) {
        return;
      };
    }
  };

  if (stats.lastDate != todayDate) {
    const endTime = new Date();
    const elapsedTime = endTime - Polyomino.initalTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = String(totalSeconds - minutes*60).padStart(2,'0');
    const time = `${String(minutes).padStart(2,'0')}:${seconds}`;
   
    stats.lastDate = todayDate;
    if (stats.fisrtTime) {
      stats.maxStreak = 1;
    }
    stats.fisrtTime = false;
    stats.time = time;
    stats.puzzleSolved += 1;
    if (stats.lastGamePlayed+1==games[todayDate].n) {
      stats.currentStreak += 1;
      if (stats.currentStreak > stats.maxStreak) {
        stats.maxStreak = stats.currentStreak;
      };
    } else {
      stats.currentStreak = 1;
    };
  
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

    stats.lastGamePlayed = games[todayDate].n;

    localStorage.setItem('@fitme-stats:', JSON.stringify(stats));
  }

  setStats();

  modalStats.open();
  return;
}

function setStats() {
  const maxValue = Math.max(...stats.distribuition);
  
  if (maxValue > 0) {
    for (let i=0; i<stats.distribuition.length; i++) {
      if (stats.distribuition[i] > 0) {
        distribuition[i].textContent =  stats.distribuition[i];
        distribuition[i].style.width = `${Math.max((stats.distribuition[i]/maxValue)*230,40)}px`;
        distribuition[i].style.backgroundColor = "#00d478";
      };
    };
  };

  conclusionTime.textContent = stats.time;
  puzzlesSolved.textContent = stats.puzzleSolved;
  currentStreak.textContent = stats.currentStreak;
  maxStreak.textContent = stats.maxStreak;  
}

startGame();