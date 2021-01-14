const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	stoneImage = new Stone(165,550,70,70)
	boyImage = new Boy(200,600,100,200);
	treeImage = new Tree(650,350,350,650)

	mango1 = new Mango(600,200,30);
	mango2 = new Mango(630,230,30);
	mango3 = new Mango(660,260,30);
	mango4 = new Mango(690,280,30);
	mango5 = new Mango(720,310,30);

	groundImage = new Ground(300, 700, 1000, 100);

	sling=new Slingshot(stoneImage.body,{x:170, y:550});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightblue")
  drawSprites();

  stoneImage.display();
  boyImage.display();
  treeImage.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  groundImage.display(); 
  sling.display();


  detectCollision(stoneImage,mango1);
  detectCollision(stoneImage,mango2);
  detectCollision(stoneImage,mango3);
  detectCollision(stoneImage,mango4);
  detectCollision(stoneImage,mango5);
}
function detectCollision(Object1, Object2) {
	mangoBodyPosition=Object2.body.position
	stoneBodyPosition=Object1.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=Object2.r+Object1.r) {
		Matter.Body.setStatic(Object2.body,false);
	}
}

function mouseReleased() {
    sling.fly();
}

function mouseDragged() {
    Matter.Body.setPosition(stoneImage.body,{x:mouseX, y:mouseY});
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneImage.body, {x:235, y:420})
		sling.attach(stoneImage.body);
	}
}

