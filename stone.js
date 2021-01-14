class Stone {
    constructor(x,y,width,height) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.rectangle(x,y, this.width, -10, options);
        console.log("Stone.constructor " + this.body.position.x)
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image = loadImage("sprites/stone.png");
        
       
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        push()
        imageMode(CENTER)
        strokeWeight(3)
        image(this.image,pos.x,pos.y,this.width,this.height)
        console.log("Stone.display " + this.body.position.x, this.body.position.y)
        pop()
    }
}