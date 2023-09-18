let x1 = 100;
let speed1 = 2; 
let diameter = 40;
let pause = 0
let x2 = 100
let speed2 = 2

function setup() {
  createCanvas(400, 400);
loop()
}

function draw() {
  background(245,222,179);
  ellipse(x1, height/2, 40)
  if (!pause){
  x1 += speed1;
  if(x1 >= 400 || x1<=0) {
    speed1 = speed1 * -1;
  }
}

  ellipse(x2, height/3, 40)
  x2 += speed2;
  if(x2 >= 400 || x2<=0) {
    speed2 = speed2 * -1;
  }
  }
  


function mouseClicked(){
  if (pause) {
    speed1 = 2;
  } else { 
    speed1 = 0
  }
pause = !pause

}











//framecount makes a number grow by 1 every frame
// xPosition = xPosition + 1; controls speed and starting point
// x += speed is the same as x = x + speed