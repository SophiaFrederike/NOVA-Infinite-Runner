class Points {
    constructor(img) {
      this.height = 40;
      this.width = 40;
      this.x = width;
      this.y = (Math.random() * height) / 1.5;
      this.image = img;
      this.medicine = 5;
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
        const healthCounter = document.querySelector('#score span')
        healthCounter.innerText = playerInfo.health
        return true;
      }
    }
  
    drawPoints() {
      this.x -= 10;
    
        image(this.image, this.x, this.y, this.width, this.height);
    }
}