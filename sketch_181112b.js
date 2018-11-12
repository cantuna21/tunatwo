var r, g, b;

function setup() {
  createCanvas(600, 400);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(0);
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(100, 200, 100, 100);
  ellipse(300, 200, 100, 100);
  ellipse(500, 200, 100, 100);
}

function mousePressed() {
  var d = dist(mouseX, mouseY, 300, 200);
  var e = dist(mouseX, mouseY, 100, 200);
  var f = dist(mouseX, mouseY, 500, 200);
  
  if (e < 50){
    r = random(255);
    g = random(255);
    b = random(255);
  }
  
  if (d < 50) {
    r = random(255);
    g = random(255);
    b = random(255);
  }  
  
  if (f < 50){
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
