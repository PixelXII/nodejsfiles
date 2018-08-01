var x = 150, y = 150;

function setup() {
  createCanvas(800, 800)
}

function draw() {
 background(51)
}

// BUBBLES

var x = floor(random(0, 400))
var y = floor(random(0, 400))
function Bubble(w, h, r) {
  this.w = w
  this.h = h
  this.x = x
  this.y = y
  this.r = r
}

Bubble.prototype.draw = function() {
  stroke(255)
  strokeWeight(4)
  fill(128, 255, 64)
  ellipse(this.x, this.y, this.w, this.h, this.r)
}

Bubble.prototype.jiggle = function() {
  this.x -= floor(random(0, 5))
  this.y += floor(random(0, 3))
}

