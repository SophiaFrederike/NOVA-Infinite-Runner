class Game {
    constructor(){
        this.points = [];
        this.threats =[];
        this.extrapoints=[];
        this.pointtext=[];
    
     
        // what to equal this.healthStatus to?  com: I don't do it like this anymore 
        
    }

    preloadGame(){
      //tried this for the gameover
      this.wonImg = loadImage("Images/Win.png");
        this.gameoverImg = loadImage("Images/Loose.png");
        this.backgroundImg = [
            {
            src: loadImage("Images/Background.png"),
            x:0,
            speed:0,
            },

            {
            src: loadImage("Images/Background.png"),
            x:0,
            speed:0,
                }
        ];

        this.playerImg = loadImage("Images/Player.png");
    
        this.pointsImg = [loadImage("Images/LAMPE.png"),
             loadImage("Images/weisservogel.png")];

        this.threatImg = loadImage("Images/Threat.png");
        this.extrapointsImg = loadImage("Images/Extrapoint.png")
    }

    setupGame (){
        this.background = new Background();
        this.background.images = this.backgroundImg;

        this.player = new Player();
        this.player.image = this.playerImg;
    }

   /* //tried this for the gameover
    checkHealthStatus(){
      if (this.player.health <= 0 ){
        this.background.images = this.gameoverImg;

      }
    }
    */
    

    drawGame(){
        clear(); 
        this.background.drawBackground();
        this.player.drawPlayer();

//this condition checks, if the game is still running
//if (this.healthStatus >0){

// this draws the points
        if (frameCount % 50 === 0) {
            this.points.push(new Points(this.pointsImg[Math.floor(Math.random() * this.pointsImg.length)]))
          }
        this.points.forEach((point) => {
            point.drawPoints();
          });
         
          this.points = this.points.filter((point) => {
            if (point.collision(this.player)) {
              return false;
            } else {
              return true;
            }
          });

// this draws the threats
          if (frameCount % 40 === 0) {
            this.threats.push(new Threat(this.threatImg));
          }
        this.threats.forEach((threat) => {
            threat.drawThreats();
          });
         
          this.threats = this.threats.filter((threat) => {
            if (threat.collision(this.player)) {
              return false;
            } else {
              return true;
            }
          });
// this draws the extrapoints
if (frameCount % 90 === 0) {
  this.extrapoints.push(new ExtraPoints(this.extrapointsImg));
}
this.extrapoints.forEach((extrapoint) => {
  extrapoint.drawExtraPoints();
});

this.extrapoints = this.extrapoints.filter((extrapoint) => {
  if (extrapoint.collision(this.player)) {
    return false;
  } else {
    return true;
  }
});


      // win and loose screen
          if (this.player.health <= 0) {
            console.log("working?");
            image(this.gameoverImg, 0,0,600, 400)
          }

          if (this.player.health >= 200) {
            console.log("working?");
            image(this.wonImg, 0,0,600, 400)
          }

        }

  }