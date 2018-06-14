var x = 150, y = 150;

function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(80, 165, 131)
  stroke(255, 87, 51)
  line(mouseX, mouseX, 3, 400)
  line(mouseY, mouseY, 6, 200)
  x+=4
  y+=5
}
