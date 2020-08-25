class Game {
    constructor(){
        this.points = [];
    }

    preloadGame(){
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
    
        this.pointsImg = [loadImage("/Infinite_Runner_NOVA/Images/Weiß Vogel.png"),loadImage("/Infinite_Runner_NOVA/Images/Projekt.png"),
             loadImage("/Infinite_Runner_NOVA/Images/Studiguide.png")];
    }

    setupGame (){
        this.background = new Background();
        this.background.images = this.backgroundImg;

        this.player = new Player();
        this.player.image = this.playerImg;
    }


    drawGame(){
        clear(); 
        this.background.drawBackground();
        this.player.drawPlayer();

        if (frameCount % 60 === 0) {
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


        
    }
}