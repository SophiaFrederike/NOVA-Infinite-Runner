class Points {
    constructor(img) {
      this.height = 50;
      this.width = 50;
      this.x = width;
      this.y = (Math.random() * height) / 1.5;
      this.image = img;
    }
  
 
    collision(playerInfo) {
      let pointX = this.x + this.width / 2;
      let pointY = this.y + this.height / 2;
      let playerX = playerInfo.x + playerInfo.width / 2;
      let playerY = playerInfo.y + playerInfo.height / 2;
      console.log(pointX, pointY, playerX, playerY);
  
      if (dist(pointX, pointY, playerX, playerY) < 50) {
        return true;
      }
    }
  
    drawPoints() {
      this.x -= 4;
      console.log("working?");
      image(this.image, this.x, this.y, this.width, this.height);
    }
  }