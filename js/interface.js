document.addEventListener("DOMContentLoaded", ()=> {
   const squares = document.querySelectorAll(".square"); 

   squares.forEach( square =>{
       square.addEventListener('click',handleClick);
   })
   

});
let timeE=document.getElementById("pontosE")

let pontoC = 0;
let pontoX = 0;
let pontoE = 0;

function handleClick(event){
    
    let square = event.target;
    let position= square.id;

   if( handleMove(position)){
    
       setTimeout(()=>{
        let timeC=document.getElementById("pontosC")
        let timeX=document.getElementById("pontosX")
            if((playerTime==0) && gameOver==true){
           pontoC++;
          timeC.innerHTML= `Pontos : ${pontoC}`  ;
         
        }
        else {
            pontoX++;
            timeX.innerHTML= `Pontos : ${pontoX}` ; 
        }
        
       },10);
    
}
    updateSquare();
    if (countTurn0 >= 5 || countTurn1 >= 5 && gameOver==false) {
        pontoE++;
        timeE.innerHTML= `pontos : ${pontoE}` ; 
 }
}




function updateSquare(){

    let sector = document.querySelectorAll(".square");

    sector.forEach((square) => {
        let pos = square.id;
        let posi = board[pos];

        if( posi != ''){
            square.innerHTML = `<div class ='${posi}'></div>`
        } 
        else{

            square.innerHTML=''
            
        }
            
    })
}

function restart(){
    clearBoard();
    updateSquare();
    console.clear();
    
    }
    function emojicon() {
    
        if (emoji2.style.display=="block") {
    
            emoji.style.display = "block";
            emoji2.style.display = "none";
            document.body.classList.remove("light");
            document.body.classList.add("dark");
            localStorage.setItem("theme","dark");
    
        }
        else {
    
            emoji.style.display = "none";
            emoji2.style.display = "block"
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            localStorage.setItem("theme","light");
    
        }
    }
    window.onload = checkTheme();
    function checkTheme(){
        let localStorageTheme = localStorage.getItem("theme");
        if(localStorageTheme != null && localStorageTheme === "dark"){
    
            document.body.className = localStorageTheme;
            emoji.style.display = "block";
            emoji2.style.display = "none";
    
        }
        else{
    
            document.body.className = localStorageTheme;
            emoji2.style.display = "block";
            emoji.style.display = "none";
    
        }
    }
