class ExtraPoints {
    constructor(img) {
      this.height = 40;
      this.width = 40;
      this.x = width;
      this.y = (Math.random() * height) / 1.5;
      this.image = img;
      this.extramedicine = 15;
    }
  
 
    collision(playerInfo) {
      let extrapointX = this.x + this.width / 2;
      let extrapointY = this.y + this.height / 2;
      let playerX = playerInfo.x + playerInfo.width / 2;
      let playerY = playerInfo.y + playerInfo.height / 2;
     
  
      if (dist(extrapointX, extrapointY, playerX, playerY) < 50) {
        game.pointtext.push(new PointText(this.x, this.y, this.extramedicine))
        console.log("here", game.pointtext);
        playerInfo.health += this.extramedicine;
        document.querySelector(".progressbutton").value = playerInfo.health;
        const healthCounter = document.querySelector('#score span')
        healthCounter.innerText = playerInfo.health
        return true;
      }
    }
  
    drawExtraPoints() {
      this.x -= 10;
    
        image(this.image, this.x, this.y, this.width, this.height);
        game.pointtext.forEach(point => point.drawPointText())
    }
}