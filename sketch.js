var x = 150, y = 150;

function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(80, 165, 131)
  stroke(255, 87, 51)
  line(mouseX, mouseY, mouseX, mouseY)
  line(mouseY, mouseY, 314, mouseY)
  line(mouseX, mouseX, mouseY, mouseY)
  line(108, mouseX, mouseY, mouseY)
  line(mouseY, mouseY, mouseY, mouseY)
  line(mouseX, mouseX, mouseX, mouseY)
  line(mouseY, mouseY, mouseY, mouseY)
  line(mouseY, 470, mouseX, mouseY)
  line(mouseX, mouseX, 230, mouseY)
  x+=4
  y+=5
}
