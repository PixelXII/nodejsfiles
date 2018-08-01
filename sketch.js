var x, y, bubbles = [];
function setup() {
  createCanvas(800, 800)
  x = floor(random(0, 400))
  y = floor(random(0, 400))
}

function draw() {
 background(51)
}

// BUBBLES

function Bubble(w, h, r) {
  this.w = w
  this.h = h
  this.x = x
  this.y = y
  this.r = r
  console.log(this)
}

Bubble.prototype.draw = function() {
  stroke(255)
  strokeWeight(4)
  fill(128, 255, 64)
  ellipse(this.x, this.y, this.w, this.h, this.r)
}

Bubble.prototype.jiggle = function() {
  this.x -= Math.floor(random(0, 5))
  this.y += Math.floor(random(0, 3))
}

