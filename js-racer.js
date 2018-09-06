"use strict"

var argumen1 = process.argv[0];
var argumen2 = process.argv[1];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var playerList = [];
var board = [];

function diceRoll() {
  let max = 4, min = 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

function moveArray(array, oldIndex, newIndex) {
  if (newIndex >= array.length) {
    let k = newIndex - array.length + 1;
    while (k--) {
      array.push(undefined);
    }
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function printBoard(playerNumber, trackLength) {
  let row = [];
  for (let i = 0; i < playerNumber; i++) {
    let col = [];
    for (let j = 0; j < trackLength + 1; j++) {
      col.push('|');
      if (j === 0) {
        col.push(alphabet[i]);
        playerList.push(alphabet[i]);
      }
      else {
        col.push(' ');
      }
    }
    row.push(col);
  }
  //console.log(row);
  board = row;
  //console.log(board);
  return row;
}

function printLine(player, pos) {
  let v = [ '|', 'A', '|', ' ', '|', ' ', '|', ' ', '|', ' ', '|', ' ', '|', ' ' ];
  let x = v.join(' ');
  console.log(x);
}



function advance(player) {
  //console.log("First");
  //console.log(board);
  for (let i = 0; i < playerList.length; i++) {
    console.log(board[i].join(' '))
    sleep(1000);
    //console.log(playerList[i]);    
    let playerIndex = board[i].indexOf(playerList[i]);
    let roll = diceRoll();
    let steps = (roll * 2) //diceRoll();
    //console.log("------------------")
    //console.log("player " + playerList[i] + " dice roll is " + roll + " step is " + steps);
    for (let j = playerIndex + 2; j < 1 + 2 + steps; j = j + 2) {
      //console.log("Down Before");
      //console.log(board[i]);
      let playerIndex = board[i].indexOf(playerList[i]);
      let tmp = board[i][playerIndex];
      board[i][playerIndex] = board[i][j];
      board[i][j] = tmp;
      //console.log(board[i]);
      //console.log("Up After");
    }
    console.log(board[i].join(' '))
    //console.log("++++++++++++++++++++")
  }
  console.log("stop")
}

function finished() {

}

function winner() {

}

function clearScreen() {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

printBoard(3, 6)
advance()
//printLine();