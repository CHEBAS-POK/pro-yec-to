var box;

function setup() {
  createCanvas(600,600);
  box = createSprite(300,300,60,60);
}

function draw() 
{
  
if (keyDown("S")){
 box.y = box.y + 5;
 } 
if (keyDown("W")){
box.y = box.y -5;
}
if (keyDown("D")){
 box.x = box.x + 5;
 }
  if (keyDown("A")){
    box.x = box.x -5;
    }
  background(30);
  drawSprites();
}




