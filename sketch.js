
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,paperImg,paperSprite;
var world;

function preload(){
paperImg=loadImage("paper.png")
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	paperSprite=createSprite(400, 620, 110,110);
	paperSprite.addImage(paperImg)
	paperSprite.scale=0.5
	
	
    engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.rectangle(400,620,10,10, {restitution:0.4,frictiom:0.5,density:1, isStatic:true});
	World.add(world, paperBody);
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	

	if(keyDown("UP_ARROW")){
	 Matter.Body.applyForce(paperBody,1200,20)
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  

  groundObject.display();
  dustbinObj.display();



  Engine.update(engine)


  paperSprite.position.x=paperBody.position.x
  paperSprite.position.y=paperBody.position.y
  
drawSprites();
}

