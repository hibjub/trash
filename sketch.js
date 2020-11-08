
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var cont1,cont2,cont3,dustBin;

var ground;

function preload() {
    dustBin = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	ground = new Ground (400,650,800,100);

	cont1 = new Container (700,600,100,20);
	cont2 = new Container (650,570,10,60);
	cont3 = new Container (750,570,10,60);
	image(dustBin,400,350,50,50);

	ball = new Ball (150,560,30,30);
}


function draw() {
  background(255);
  
  Engine.update(engine);

  cont1.display();
  cont2.display();
  cont3.display();

  ground.display();

  ball.display();

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:93,y:-93});
 }
}



