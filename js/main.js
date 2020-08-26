
const game = new Game();


  function preload(){
      game.preloadGame();

  }

  function setup() {
    createCanvas(1000, 700);
    game.setupGame();
    // game.checkHealthStatus();
    
  }

  function draw (){
      game.drawGame()

  }


function keyPressed() {
  
  if (keyCode === 32) {
  
    game.player.jump();
    } 
  if ((keyCode === 13 && game.player.health <=0)||(keyCode === 13 && game.player.health >=200) ){
    window.location.reload()
  }
  
}


//Restart function
// function reload (){

// }
//window.location.reload();


//Button to restart
// window.addEventListener('load', () =>{
//   const restartBtn = document.getElementsByClassName("restart")
//   restartBtn.addEventListener('click',window.location.reload());
//   console.log('I have been clicked')
// })