function setup() {
  createCanvas(640, 480)
}

function draw() {
  var x = 100, y = 100;
  background(255, 255, 0)
  ellipse(x, y, 80, 80)
  if (mouseIsPressed) {
    fill(255)
  } else {
    fill(0, 255, 0)
  }
  
  function keyPressed() {
    if(key === UP) {
      y++
    } else if(key === DOWN) {
      y--
    } else if(key === LEFT) {
      x++
    } else if(key === RIGHT) {
      x--
    }
  
}
