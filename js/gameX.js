//Iniciar as minhas variaveis
let board = ['','','','','','','','','',]
let playerTime = 0;
let symbols = ['x','o'];
let gameOver = false;
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let countTurn0 = 0;
let countTurn1 = 0;

function handleMove(position){
    if(gameOver){
        return;
    }

    if(board[position]==""){

    board[position] = symbols[playerTime];

    gameOver = isWin();

    if(gameOver==false){
         
         if (playerTime == 0) {
            countTurn0++;
            playerTime = 1;
          } else {
            countTurn1++;
            playerTime = 0;
          }

    }
  }
  return gameOver;
}
function isWin(){

    for(let i = 0;i < winStates.length ; i++){
        let seq = winStates[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];


        if(board [pos1]== board[pos2]  && 
            board [pos1] == board[pos3] && 
            board [pos1] != '' ){
            return true;
        }
    }
 return false;
}
function clearBoard(){
    board = ['','','','','','','','','',]
    gameOver= false;
    playerTime=0;
    countTurn0 = 0;
    countTurn1 = 0;
}

