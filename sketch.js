var fixedObject;
var movingObject;

function setup() {
  createCanvas(800,400);
  fixedObject=createSprite(300, 200, 50, 50);
  fixedObject.shapeColor="green";
  fixedObject.debug=true;
  movingObject=createSprite(500, 200, 50, 50);
  movingObject.shapeColor="green";
  movingObject.debug=true;
}

function draw() {
  background(0);
  movingObject.x=mouseX;
  movingObject.y=mouseY;
  console.log("moving object"+(movingObject.x-fixedObject.x));
  if(movingObject.x-fixedObject.x<=movingObject.width/2+fixedObject.width/2
    &&fixedObject.x-movingObject.x<movingObject.width/2+fixedObject.width/2
    &&movingObject.y-fixedObject.y<=movingObject.height/2+fixedObject.height/2
    &&fixedObject.y-movingObject.y<movingObject.height/2+fixedObject.height/2){
    fixedObject.shapeColor="red";
    movingObject.shapeColor="red";
  }
  else{
    fixedObject.shapeColor="green";
    movingObject.shapeColor="green";
  }
  drawSprites();
}