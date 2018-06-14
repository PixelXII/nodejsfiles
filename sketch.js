var x, y, speedX, speedY;
var diam = 10;
var rectSize = 200;

function setup() {
  fullScreen();
  fill(0, 255, 0);
  reset();
}

function reset() {
  x = width/2;
  y = height/2;
  speedX = random(3, 5);
  speedY = random(3, 5);
}

function draw() { 
  background(0);
  
  ellipse(x, y, diam, diam);

  rect(0, 0, 20, height);
  rect(width-30, mouseY-rectSize/2, 10, rectSize);

  x += speedX;
  y += speedY;

  // if ball hits movable bar, invert X direction
  if ( x > width-30 && x < width -20 && y > mouseY-rectSize/2 && y < mouseY+rectSize/2 ) {
    speedX = speedX * -1;
  } 

  // if ball hits wall, change direction of X
  if (x < 25) {
    speedX *= -1.1;
    speedY *= 1.1;
    x += speedX;
  }


  // if ball hits up or down, change direction of Y   
  if ( y > height || y < 0 ) {
    speedY *= -1;
  }
}

function mousePressed() {
  reset();
}
