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

loadModel("

g Object001

v 0.000000E+00 0.000000E+00 78.0000
v 45.0000 45.0000 0.000000E+00
v 45.0000 -45.0000 0.000000E+00
v -45.0000 -45.0000 0.000000E+00
v -45.0000 45.0000 0.000000E+00
v 0.000000E+00 0.000000E+00 -78.0000

f     1 2 3
f     1 3 4
f     1 4 5
f     1 5 2
f     6 5 4
f     6 4 3
f     6 3 2
f     6 2 1
f     6 1 5
          ")
