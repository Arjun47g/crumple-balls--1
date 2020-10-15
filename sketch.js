
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);
  engine = Engine.create();
	world = engine.world;



	ground = new Ground(600,480,1200,20);
  paper = new Paper(200, 450, 30);
  


	dustbin1 = new Dustbin(950,470,300,20);
	dustbin2 = new Dustbin(800,430,20,100);
	dustbin3 = new Dustbin(1100,430,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  
  drawSprites();
 
}

function keyPressed(){

if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paper.body,paper.body.position,{x:40, y:-40});
	 
}	

}


