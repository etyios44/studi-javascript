// CSS variables

var newGame = document.querySelector('.newGame');
var dice = document.querySelector('.dice-img');
var play = document.querySelector('.play');
var player1 = document.querySelector('.player1');
var player2 = document.querySelector('.player2');
var noplay = document.querySelector('.noplay');
var point1 = document.querySelector('.point1');
var point2 = document.querySelector('.point2');
var current1 = document.querySelector('.current1');
var current2 = document.querySelector('.current2');
var count1 = document.querySelector('.count1');
var count2 = document.querySelector('.count2');
var roolDice = document.querySelector('.rool');
var hold = document.querySelector('.hold');
var maxGame = 100;

// globals variables

var colorNoplay = "rgb(243, 243, 243)";
var colorPlay = "#cacbcc";
var playerOn = '<ion-icon class="RedDiceIcons" name="ellipse" size="small"></ion-icon>';
var playerOff = '<ion-icon class="RedDiceIcons" name="" size="small"></ion-icon>';
var newPoints = getRandomInt(); 
var counts1 = 0;
var counts2 = 0;
var points1 = 0;
var points2 = 0;
var actifPlayer = 1;
var finGame=false;

// functions

function changePlayer() {
  if (actifPlayer === 1) {
    play.style.backgroundColor = colorNoplay;
    noplay.style.backgroundColor = colorPlay;
    player1.innerHTML='PLAYER 1' + playerOff;
    player2.innerHTML='PLAYER 2' + playerOn;
    counts1 = 0;
    count1.innerHTML = 0;
    actifPlayer = 2;
  } else {
    play.style.backgroundColor = colorPlay;
    noplay.style.backgroundColor = colorNoplay;
    player1.innerHTML='PLAYER 1' + playerOn;
    player2.innerHTML='PLAYER 2' + playerOff;
    counts2 = 0;  
    count2.innerHTML = 0;  
    actifPlayer = 1;
  }
}

function getRandomInt() {
  newPoints = Math.floor(Math.random() * Math.floor(5)) + 1;
  return newPoints;
}

function changeGame() {
  finGame=false;
  points1 = 0;
  points2 = 0;
  point1.innerHTML = 0;
  point2.innerHTML = 0;
  changePlayer();
};

//EnventListeners

newGame.addEventListener('click', changeGame);

roolDice.addEventListener('click', () => {
  if (!finGame) {
    newPoints = getRandomInt();
    dice.src = './images/dice-' + newPoints + '.svg';
    if (newPoints === 1) {
      changePlayer();
    } else {
      if (actifPlayer === 1) {
        counts1 = counts1 + newPoints;
        count1.innerHTML = counts1;
      } else {
        counts2 = counts2 + newPoints;
        count2.innerHTML = counts2;
      }
    }
  }
})

hold.addEventListener('click', () => {
  if (!finGame) {
    if (actifPlayer === 1) {
      points1 = points1 + counts1;
      point1.innerHTML = points1;
    } else {
      points2 = points2 + counts2;
      point2.innerHTML = points2;
    }

    if ((points1 >= maxGame) || (points2 >= maxGame)) {
      finGame=true;
    } else {
      changePlayer();
    }
  }
})
