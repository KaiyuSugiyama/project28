class Ground {
    constructor(x,y,width,height) {
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push()
        rectMode(CENTER)
        fill("brown");
        strokeWeight(3)
        rect(this.x,this.y,this.width,this.height)
        pop()
    }
}