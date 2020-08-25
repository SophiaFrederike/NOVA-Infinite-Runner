
const game = new Game();


  function preload(){
      game.preloadGame();

  }

  function setup() {
    createCanvas(1000, 700);
    game.setupGame();
  }

  function draw (){
      game.drawGame()

  }


function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  }
}