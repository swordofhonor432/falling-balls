class Ball{
    constuctor(x,y,radius){
var options = {
    isStatic: true
}
    
this.body = Bodies.circle(x,y,radius);
World.add(world, this.body);
this.radius = 20;
    }

display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    fill("brown");
    ellipse(pos.x, pos.y,20,20 );
  }
    
}