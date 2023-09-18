let x = 100;
let speed = 2; 
let diameter = 40;

function setup() {
  createCanvas(400, 400);

}


function draw() {
  background(245,222,179);
  ellipse(x, height/2, 40)
  x += speed;
  if(x >= 400 || x<=0) {
    speed = speed * -1;
  }

}
noloop()
function mouseClicked() {
 speed = 0
}




//framecount makes a number grow by 1 every frame
// xPosition = xPosition + 1; controls speed and starting point
// x += speed is the same as x = x + speed