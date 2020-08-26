class Player{
constructor(){
    this.height = 80;
    this.width = 80;
    this.x = 10;
    this.y = 300;
    this.gravity = 0.4;
    this.velocity = 0;

    this.health = 50;

    this.image;
}


drawPlayer() {
if (this.health <= 0 || this.health >=200) {
  frameRate(0)
}


    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y >= height - this.height) {
      this.y = height - this.height;
    }
    if(this.y <=0){
        this.y=0;
    }

    image(this.image, this.x, this.y, this.height, this.width);
  }

  jump() {
    console.log("this will be the jump");
   // if (this.y === height - this.height) {
      this.velocity = -10;
    //}
  }
// this is supposted to be the counter for the catched Points of the player
  receiveHealth(pointmedicine){
    this.health += pointmedicine;
  }

  //this is supposed to be the counter for the catched threats

receiveDamage(damage){
  this.health -=damage;
 
}

}

