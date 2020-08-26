class Threat {
    constructor(img) {
      this.height = 80;
      this.width = 80;
      this.x = width;
      this.y = (Math.random() * height) / 1.5;
      this.image = img;
      this.damage = 10;
    }
  
 
    collision(playerInfo) {
      let threatX = this.x + this.width / 2;
      let threatY = this.y + this.height / 2;
      let playerX = playerInfo.x + playerInfo.width / 2;
      let playerY = playerInfo.y + playerInfo.height / 2;
     
  
      if (dist(threatX, threatY, playerX, playerY) < 50) {
      
        playerInfo.health -=this.damage;
        document.querySelector(".progressbutton").value = playerInfo.health;
        console.log(playerInfo.health)
        const healthCounter = document.querySelector('#score span')
        healthCounter.innerText = playerInfo.health
        return true;
      }

    }
  
    drawThreats() {
      this.x -= 15;
        image(this.image, this.x, this.y, this.width, this.height);
    }
}