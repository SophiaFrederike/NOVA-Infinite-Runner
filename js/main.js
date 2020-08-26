
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
  if (player.health <=0){
  if (keyCode === 32) {
    game.player.jump();
  }
} else if (player.health>0){
  if (keyCode ===32){
    game.preloadGame();
  }
}
}

