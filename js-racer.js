"use strict"

const numOfPlayer = +process.argv[2];
const panjangLintasan = +process.argv[3];
let pemenang = ''

let nameOfPlayer = 'abcdefghijklmnopqrstuvwxyz';
let playerDetails = [];

for (let i = 0; i < numOfPlayer; i++) {
  let playerNameObj = {};
  playerDetails.push(playerNameObj);
  playerDetails[i]['name'] = nameOfPlayer[i];
  playerDetails[i]['position'] = 0;
}

function diceRoll () {
  return Math.floor(Math.random() * (6-1) + 1);
}

function sleep (milliseconds) {
  let start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function printBoard () {
  for (let i = 0; i < numOfPlayer; i++) {
    printLine(playerDetails[i]['name'], playerDetails[i]['position']);
  }
}

function printLine (player, pos) {
  let perLine = [];
  for (let i = 0; i < panjangLintasan + 1; i++) {
    if (pos === i) {
      perLine.push(' ' + player + ' ');
    } else {
      perLine.push('    ');
    }
  }
  console.log(perLine.join('|'));
}

function advance (lineNum) {
    let moves = diceRoll();
    if ((playerDetails[lineNum]['position'] + moves) >= panjangLintasan) {
      playerDetails[lineNum]['position'] = panjangLintasan;
    } else {
      playerDetails[lineNum]['position'] += moves;
    }
}


function finished () {
  for (var i = 0; i < numOfPlayer; i++) {
    if (playerDetails[i]['position'] >= panjangLintasan) {
      pemenang = playerDetails[i]['name'];
      return true;
    }
  }
  return false;
}

function winner () {
  console.log('Player ' + pemenang + ' is the winner!');
}

function clearScreen () {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

if (numOfPlayer < 2) {
  console.log('Minimal player = 2');
} else if (panjangLintasan < 15) {
  console.log('Minimum Panjang Lintasan = 15');
} else {
  while(finished() === false) {
    for (var i = 0; i < numOfPlayer; i++) {
      advance(i);
      clearScreen();
      printBoard();
      if (finished() === true) {
        break;
      } else {
        sleep(800);
      }
    }
  }
  winner()
}
