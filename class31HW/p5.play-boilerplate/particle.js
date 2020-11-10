class Particle {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':0.3,
          'density':0.5
      }
            
      this.x=x;
      this.y=y;
      this.r=r;

      this.body = Bodies.circle(x, y, r/2, options);
      
      this.color=color(random(0,255),random(0,255),random(0,255))
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke(0);
      fill(this.color);
      ellipse(0,0,this.r,this.r)
      ellipseMode(RADIUS);
     
      pop();
    }
  };