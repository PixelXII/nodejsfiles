var x = 150, y = 150;

function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(80, 165, 131)
  fill(255, 87, 51)
  ellipse(x, y, 15, 15)
  if(x > 500) {
    x--
  } else if(y > 498) {
    y--
  } else {
    x++
  }
}
