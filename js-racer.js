"use strict"
let jumlahPlayer = process.argv[2];
//let jumlahPlayer = 3;
let panjangJalur  = process.argv[3];
//let panjangJalur  = 20;

function diceRoll () {
    let min = 1;
    let max = 6;
    return Math.floor(Math.random()*(max - min)+min);      
}
function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function printBoard (player) {
    for(let i = 0;i < player.length;i++){
        printLine(player[i].name,player[i].position)
      }
}

function printLine (player, pos) {
    let jalur = []
    for(let i = 0;i < panjangJalur-1;i++){
      if(i === pos){
        jalur.push(player)
      }else{
        jalur.push(' ')
      }
    }
    console.log(jalur.join('|'))
}

function advance (player) {
    let acak = diceRoll();
    let updatePosition = player.position += acak;
    if(updatePosition >= panjangJalur){
        player.position = panjangJalur
    }else{
        player.position = updatePosition
    }
    return player.position
}

function finished () {
    for(let i = 0;i < namaDanPosisi.length;i++){
        if(namaDanPosisi[i].position >= panjangJalur){
            winner(namaDanPosisi[i].name);
            return true
        }
            
    }
    return false
}

function winner (player) {
    console.log('player ' + player + ' is the winner')
}

function clearScreen () {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}
let playerName = "ABCDEFGHIJKLMNOPRSTUVWXYZ"
var namaDanPosisi = []
for(let i = 0;i < jumlahPlayer;i++){
  let obj = {
    name: playerName[i],
    position: 0
  }
  namaDanPosisi.push(obj)
}
if(jumlahPlayer < 2 || panjangJalur < 15){
    console.log('min : 2 === Max : 15')
  }else{
    while(finished() === false){
      clearScreen()
      
        //console.log('===')
      for(let i = 0;i < namaDanPosisi.length;i++){
        
        if(finished(namaDanPosisi[i]) === true){
          
            break
        }
        advance(namaDanPosisi[i])
      } 
      
      printBoard(namaDanPosisi); 
         
      sleep(1000)
      
    }
  }
