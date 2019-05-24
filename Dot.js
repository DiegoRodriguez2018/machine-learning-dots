const { matrixAdd } = require('./math-utils');

// Creating the Dot class.
function Dot(position = [0, 0], velocity, acceleration) {
  this.radius = 5;
  this.position = position;
  this.velocity = [0, 0];
  this.acceleration = [0, 0];
}

Dot.prototype.show = function() {
  const c = document.getElementById('root');
  const ctx = c.getContext('2d');
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";
  ctx.beginPath();
  // context.arc(x,y,r,sAngle,eAngle,counterclockwise);
  ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI);
  ctx.stroke();
};

Dot.prototype.move = function() {
  // adding acceleration to velocity.
  this.velocity = matrixAdd(this.velocity, this.acceleration);
  // adding velocity to position.
  this.position = matrixAdd(this.position, this.velocity);
};

module.exports = Dot;
