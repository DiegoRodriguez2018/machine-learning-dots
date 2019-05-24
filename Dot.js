const Brain = require('./Brain')
const { matrixAdd } = require('./math-utils');
// Creating the Dot class.
function Dot(position = [0, 0], velocity, acceleration) {
  this.radius = 5;
  this.position = position;
  this.velocity = [0, 0];
  this.acceleration = [0, 0];
  this.brain = new Brain(400); // Instantiating Brain with a 400 size.
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

  // const message = `{position:${this.position},acceleration:${this.acceleration}, brain.steps:${this.brain.steps}, brain.directions.length:${this.brain.directions.length}, this.brain.directions[steps]:${this.brain.directions[1]}}`

  const message = `brain.directions[steps]:${this.brain.directions[this.brain.steps]}}`
  ctx.fillStyle = "white";
  ctx.font = "18px Arial";
  ctx.fillText(message, 0, 590);
  ctx.fillStyle = "grey";

};

Dot.prototype.move = function() {
  // Using brain directions to calculate acceleration
  if (this.brain.directions.length>this.brain.steps){
    this.acceleration = this.brain.directions[this.brain.steps];
    this.brain.steps +=1;
  }

  // adding acceleration to velocity.
  this.velocity = matrixAdd(this.velocity, this.acceleration);
  // adding velocity to position.
  this.position = matrixAdd(this.position, this.velocity);

};

module.exports = Dot;
