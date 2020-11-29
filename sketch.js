
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var box1, box2, box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0.5,
		density: 1.2
	}
paper1 = Matter.Bodies.circle(200, 600, 10, options);
paper1.shapeColor = color("pink");
World.add(world, paper1);

box1 = createSprite (500, 650, 200, 20);
	box1.shapeColor = color("red");

	box2 = createSprite(400, 600, 20, 100);
	box2.shapeColor = color("red");

	box3 = createSprite(600, 600, 20, 100);
	box3.shapeColor = color("red");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85, y:-85});
	}
}

