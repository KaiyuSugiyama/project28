class Tree {
    constructor(x,y,width,height) {
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.rectangle(x, y, width, height, options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image = loadImage("sprites/tree.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        push()
        imageMode(CENTER)
        strokeWeight(3)
        image(this.image,this.x,this.y,this.width,this.height)
        pop()
    }
}