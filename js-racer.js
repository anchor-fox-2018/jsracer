"use strict"

//randomized
function diceRoll () {
  return Math.round(Math.random() * 6);
}

console.log('diceRoll: ' + diceRoll());

function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }

}
console.log('the duration: ' + sleep(4000))

//empty board
function printBoard () {
  let col = process.argv[2];
  let row = process.argv[3];
  let fullRow = '';

  for (let i = 0; i < row; i++) {
    fullRow += '| ';
  }

  for (let c = 0; c < col; c++) {
    console.log(fullRow)
  }
}
printBoard()

//when the player is there
function printLine (player, pos) {

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