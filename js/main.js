
const game = new Game();


  function preload(){
      game.preloadGame();

  }

  function setup() {
    createCanvas(600, 400);
    game.setupGame();
    
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
