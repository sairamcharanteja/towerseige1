

function setup() {
  createCanvas(1200,800);
  createSprite(600, 400, 400, 10);
  ground = createSprite(600,790,1200,10);
  box1 = createSprite(550,350,100,100);
  box2 = createSprite(660,335,100,100);
}

function draw() {
  background(0);  
  drawSprites();
}