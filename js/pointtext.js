class PointText {
    constructor(x,y, extrapoints){
        this.x = x;
        this.y = y;
        this.extrapoints = extrapoints;
    }

    drawPointText(){
        console.log(this.x, this.y)
        this.y--
        push()
        textSize(15);
        fill(255)
        text('Extrapunkt', this.x, this.y)
        pop()
    }
}