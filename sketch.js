function setup() {
  createCanvas(640, 480)
}

function draw() {
  background(255, 255, 0)
  ellipse(mouseX, mouseY, 80, 80)
  if (mouseIsPressed) {
    fill(255)
  } else {
    fill(0, 255, 0)
  }
  
}
