var stone,sand,iron,hammer,ground;
var hammer,rubber,rubberBall,sand1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  stone = new Stone(700,340,70,70);
  iron=new Iron(920,320,60,40);
  
  ground=new Ground(600,height,1200,30);    
  hammer = new Hammer(200,200,100,50);
  
  rubberBall = new Rubber(300,200,40);
  sand1 = new Sand(500,200,10);
  sand2 = new Sand(480,200,10);
  sand3 = new Sand(520,200,10);
  sand4 = new Sand(540,200,10);
  sand5 = new Sand(560,200,10);

  Engine.run(engine);
 
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  stone.display();
  hammer.display();
  sand1.display();
  iron.display();
  rubberBall.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  drawSprites();
 
}



