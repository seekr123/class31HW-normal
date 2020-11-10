const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var plinkos=[];
var particles=[];
var divisions=[];
var divisionHeight=300;


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  engine=Engine.create();
  world=engine.world;

 

for(var k=0;k<=width;k=k+80){
 divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
}

  ground=new Ground(0,780,1200,10);

  for (var j = 75; j <=width; j=j+50) 
  {
       plinkos.push(new Plinko(j,75,5));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {  
     plinkos.push(new Plinko(j,175,5));
  }

   for (var j = 75; j <=width; j=j+50) 
  {  
     plinkos.push(new Plinko(j,275,5));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {  
     plinkos.push(new Plinko(j,375,5));
  }


}

function draw() {
  background(0);  
  Engine.update(engine);
 
  
  ground.display();


  for (var j = 0; j < plinkos.length; j++) {
      plinkos[j].display();    
  }
  
  for (var i = 0; i < particles.length; i++) {
      particles[i].display();
  }



  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));    
  }

  for (var k=0;k<divisions.length;k=k++){
    divisions[k].display();
}



 

  
  
   
  drawSprites();


}



