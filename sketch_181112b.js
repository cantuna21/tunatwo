var img;
var theta = 0;

var speed;

function setup(){
  createCanvas(1200, 800, WEBGL);
  img = loadImage("asset/dealwithit.jpg");
}

function draw(){
  background(0);
  deal();
}

function deal(){
   translate(0,-50,0);
  push();
    rotateZ(theta * 0.15);
    rotateX(theta * 0.15);
    rotateY(theta * 0.15);
    texture(img);
    box(300, 300, 300);
  pop();
  theta += 0.05;  
  
  
}

