class Points {
    constructor(img) {
      this.height = 80;
      this.width = 80;
      this.x = width;
      this.y = (Math.random() * height) / 1.5;
      this.image = img;
      this.medicine = 10;
    }
  
 
    collision(playerInfo) {
      let pointX = this.x + this.width / 2;
      let pointY = this.y + this.height / 2;
      let playerX = playerInfo.x + playerInfo.width / 2;
      let playerY = playerInfo.y + playerInfo.height / 2;
     
  
      if (dist(pointX, pointY, playerX, playerY) < 50) {
        playerInfo.health +=this.medicine;
        document.querySelector(".progressbutton").value = playerInfo.health;
        console.log(playerInfo.health)
        return true;
      }
    }
  
    drawPoints() {
      this.x -= 5;
    
        image(this.image, this.x, this.y, this.width, this.height);
    }
}