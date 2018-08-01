var x = Math.random()*400
var y = Math.random()*400
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
  ellipse(this.x, this.y, this.w, this.h, this.r)
}

Bubble.prototype.jiggle = function() {
  this.x -= random(0, 5)
  this.y += random(0, 3)
}
