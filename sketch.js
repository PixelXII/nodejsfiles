var x = 150, y = 150;

function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(80, 165, 131)
  stroke(255, 87, 51)
  line(mouseX, mouseY, mouseX+12, mouseY+12)
  line(mouseY, mouseY, 314, mouseY+12)
  line(mouseX, mouseX, mouseY, mouseY+12)
  line(108, mouseX, mouseY, mouseY+12)
  rect(180, mouseY, mouseX, mouseX-12)
  line(mouseY, mouseY, mouseY, mouseY+12)
  line(mouseX, mouseX, mouseX, mouseY+12)
  line(mouseY, mouseY, mouseY, mouseY+12)
  line(mouseY, 470, mouseX, mouseY+12)
  line(mouseX, mouseX, 230, mouseY+12)
  x+=4
  y+=5
}
