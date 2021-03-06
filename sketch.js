var fixedRect, movingRect
var rect, square







function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(320,320,90,60)
  movingRect=createSprite(100,100, 60, 90)
  rect=createSprite(200,200, 50, 70)
  square=createSprite(100,100,100,100)
}


function draw() {
  background(0);
  bounceOff(movingRect, square);
  if (isTouching(movingRect, rect)) {
    movingRect.shapeColor="blue";
    rect.shapeColor="blue";
  }
  else {
    movingRect.shapeColor="Red";
    rect.shapeColor="Red";
  }
  movingRect.velocityY=-5;
  square.velocityY=5;
  console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2 + fixedRect.width/2);
  drawSprites();
}

