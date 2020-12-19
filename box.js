class box{
    constructor(x,y,width,height){
      this.body = Bodies.rectangle(x,y,width,height,{isStatic:true})
      this.image = loadImage("dustbingreen.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
display(){
        rectMode(CENTER);
        fill("green");
        imageMode(CENTER);
        image(this.image,width/2+10, height-105,120,120);
        //rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
}
}