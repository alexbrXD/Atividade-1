var ball
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,25,25)
}

function draw() 
{
  background(30);
  if(keyDown("d")){
    ball.x += 5
    }
    if(keyDown("a")){
    ball.x -= 5
    }
drawSprites()
}




