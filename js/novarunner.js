class Player{
constructor(){
    this.height = 100;
    this.width = 100;
    this.x = 0;
    this.y = height - this.height;
    this.gravity = 0.4;
    this.velocity = 0;

    this.image;
}

drawPlayer() {

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

}