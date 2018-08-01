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

function Bubble(w, h) {
  this.w = w
  this.h = h
  this.x = x
  this.y = y
}

Bubble.prototype.draw = function() {
  fill(255)
  ellipse(this.x, this.y, this.w, this.h)
}

Bubble.prototype.jiggle = function() {
  this.x -= Math.floor(random(0, 5))
  this.y += Math.floor(random(0, 3))
}

function mousePressed() {
  var b = new Bubble(20, 20, 20)
  b.draw()
  bubbles.push(b)
}
