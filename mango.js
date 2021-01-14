class Mango{
    constructor(x,y,r)
    {
        var options={
            isStatic:true,
            restitution:0
            
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("sprites/mango.png")
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        push()
        imageMode(CENTER)
        strokeWeight(3)
        image(this.image,this.x,this.y,this.r,this.r);
        pop()
    }
}