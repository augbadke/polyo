const puzzlesSolved = document.querySelector('.puzzles_solved');
const distribuition = document.querySelectorAll('.bar');
const totalHints = document.querySelector('.totalHints');
const container = document.getElementById('buttons-container');
const date = new Date();
const targetDate = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
const list = [];
const gamesPlayed = [];
const gamesNotPlayed = [];
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

new Modal('.modal-help','.close', '.helpBtn');
new Modal('.modal-stats','.close-stats', '.statsBtn');
new Modal('.modal-contact','.close-contact', '.contactBtn');

setStats()

for (const date in games) {
  if (new Date(date) < new Date(targetDate)) {
    list.push({n: games[date].n, date: date});
  }
}

list.forEach(item => {
  if (stats.gamesList.includes(item.n)) {
    gamesPlayed.push(item);
  } else {
    gamesNotPlayed.push(item);
  }
});

gamesNotPlayed.forEach(value => {
  const button = document.createElement('button');
  button.textContent = `Game #${String(value.n).padStart(2,'0')}`;
  button.addEventListener('click', () => {
    window.location = `play.html?id=${value.date}`;
  });
  container.appendChild(button);
});

gamesPlayed.forEach(value => {
  const button = document.createElement('button');
  button.style.color = 'rgb(177, 124, 220)';
  button.style.borderColor = 'rgba(177, 124, 220,0.6)';
  button.textContent = `Game #${String(value.n).padStart(2,'0')}`;
  button.addEventListener('click', () => {
    window.location = `play.html?id=${value.date}`;
  });
  container.appendChild(button);
});

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
  totalHints.textContent = stats.totalHints;

  puzzlesSolved.textContent = stats.gamesList.length;
}