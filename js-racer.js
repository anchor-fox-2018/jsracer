"use strict"

const numOfPlayer = +process.argv[2]
const panjangLintasan = +process.argv[3]

function diceRoll () {
  return Math.floor(Math.random() * 6)
}

function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function printBoard () {
  let board = []
  for (var i = 0; i < numOfPlayer; i++) {
    board.push(printLine(nameOfPlayer[i], 0));
  }
}

let nameOfPlayer = 'abcdefghij'
let playerNameArr = []
for (var i = 0; i < numOfPlayer; i++) {
  playerNameArr.push(nameOfPlayer[i]);
  console.log(playerNameArr);
}

function printLine (player, pos) {
  let perLine = [];
  for (var i = 0; i < panjangLintasan + 1; i++) {
    if (pos === i) {
      perLine.push(' ' + player + ' ')
    } else {
      perLine.push('    ')
    }
  }
  console.log(perLine.join('|'))
}

function advance (player) {

}

function finished () {

}

function winner () {

}

function clearScreen () {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

console.log(process.argv);
printBoard();
//printLine('a', 5);
