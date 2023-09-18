let bgcolor;


function setup() {
  createCanvas(400, 400);
  bgcolor = color(255,0,100)
}

function draw() {
  background(bgcolor);


  // push();
// translate(40,40);
//rorate(45)
//rect(0,0,20,20)
//pop();

//let color = map(mouseY, 0, height, 0,255);
//let color = random(0, 255)

//fill(random(255), random(255), random(255));

rect(mouseX, 100, 50, 50)
}

function mouseClicked() {
// if(bgcolor == "orange"){
//   bgcolor = "black";
// } else {
//   bgcolor = "orange"
// }
  bgcolor = "black"
}