
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);
	ground= new Ground(600,690,1600,20);
	wall1 =new Box(1300,665,170,20);
	wall2 =new Box(1205,615,20,120);
	wall3 =new Box(1395,615,20,120);
	ball= new Ball(100,360,25);
}


function draw() {
  
  background(0);
  Engine.update(engine);
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  ball.display();
 
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-95});
	}
}


