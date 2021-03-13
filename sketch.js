const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyimg;
var mango1, mango2, mango3,mango4,mango5;
var stone;
function preload(){

boyimg = loadImage("Pluckingmangoes/boy.png");

	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,400,30,30);
	boy.addImage(boyimg);
	boy.scale = 0.1;
	
	mango1 = new mangos(750,200,40);
	mango2 = new mangos(695,90,40);
	mango3 = new mangos(625,205,40);
	mango4 = new mangos(775,125,40);
	mango5 = new mangos(625,130,40);
	stone = new rock(150,375,30,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();


  drawSprites();
 
}

function mouseDragged() {
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
elastic.fly();
}