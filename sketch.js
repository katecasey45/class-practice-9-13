let x = 100;
let speed = 1; 
let diameter = 40;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(125);
  ellipse(x, height/2, 40)
  x += speed;
  if(x >= 400 || x<=0) {
    speed = speed * -1;
  }

  
}

//framecount makes a number grow by 1 every frame
// xPosition = xPosition + 1; controls speed and starting point
// x += speed is the same as x = x + speed