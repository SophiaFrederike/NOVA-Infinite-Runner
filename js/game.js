class Game {
    constructor(){
        this.points = [];
        this.threats =[];
    
     
        // what to equal this.healthStatus to?  com: I don't do it like this anymore 
        
    }

    preloadGame(){
      //tried this for the gameover
      this.wonImg = loadImage("/Infinite_Runner_NOVA/Images/Win.png");
        this.gameoverImg = loadImage("/Infinite_Runner_NOVA/Images/Loose.png");
        this.backgroundImg = [
            {
            src: loadImage("/Infinite_Runner_NOVA/Images/Background.png"),
            x:0,
            speed:0,
            },

            {
            src: loadImage("/Infinite_Runner_NOVA/Images/Background.png"),
            x:0,
            speed:0,
                }
        ];

        this.playerImg = loadImage("/Infinite_Runner_NOVA/Images/Player.png");
    
        this.pointsImg = [loadImage("/Infinite_Runner_NOVA/Images/Weiß Vogel.png"),
             loadImage("/Infinite_Runner_NOVA/Images/LAMPE.png")];

        this.threatImg = loadImage("/Infinite_Runner_NOVA/Images/Threat.png");
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