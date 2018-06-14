var x = 150, y = 150;

function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(80, 165, 131)
  stroke(255, 87, 51)
  line(mouseX, mouseX, mouseX, mouseX)
  line(mouseY, mouseY, mouseY, mouseY)
  line(mouseX, mouseY, mouseY, mouseY)
  line(mouseX, mouseX, mouseY, mouseY)
  line(random(1, 100), random(1, 100), mouseY*random(1, 5), mouseX%random(1, 10))
  line(mouseX, mouseX, mouseX, mouseY)
  line(mouseY, mouseX, mouseY, mouseY)
  line(mouseY, mouseX, mouseX, mouseY)
  line(mouseY, mouseX, mouseX, mouseX)
  x+=4
  y+=5
}
