class Paper{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius,{density:1.2});
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
           // ellipseMode(CENTER);
            imageMode(CENTER);
            image(this.image,0, 0,50,50);
           // ellipse(0,0,this.radius);
            fill("yellow");
            pop();
    }
}