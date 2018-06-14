function setup() {
  createCanvas(640, 480)
}

function draw() {
  ellipse(50, 50, 80, 80)
  if (mouseIsPressed) {
    fill(0)
    stroke(24, 53, 150)
  } else {
    fill(40)
  }
}
