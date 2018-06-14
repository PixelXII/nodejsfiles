var x = 150, y = 150;

function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(80, 165, 131)
  fill(255, 87, 51)
  ellipse(x, y, 15, 15)
  x+=4
  y+=5
}
