class Plinko {
    constructor(x, y,r) {
      var options = {
          isStatic:true,
          'restitution':0.4,
          'friction':0.3,
          'density':0.5
      }
            
      this.x=x;
      this.y=y;
      this.r=r;

      this.body = Bodies.circle(x, y, r/2, options);
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.r, this.r);
      strokeWeight(4);
      stroke(0);
      fill('white');   
      
     
      pop();
    }
  };