const Brain = require('./Brain');
const { matrixAdd, distance } = require('./math-utils');
const { screenWidth, screenHeight, goalPosition, goalRadius } = require('./projectConfig');

// Creating the Dot class.
function Dot(position = [400, 550]) {
  this.radius = 5;
  this.position = position;
  this.velocity = [0, 0];
  this.acceleration = [0, 0];
  const lifeExpectancy = 300; // the number of directions it will change before it dies.
  this.brain = new Brain(lifeExpectancy); // Instantiating Brain with lifeExpectancy.
  this.dead = false;
}

Dot.prototype.show = function() {
  const c = document.getElementById('world');
  const ctx = c.getContext('2d');

  ctx.lineWidth = 2;
  ctx.strokeStyle = this.dead ? 'red' : 'white';
  ctx.beginPath();
  // context.arc(x,y,r,sAngle,eAngle,counterclockwise);
  ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI);
  ctx.stroke();
};

Dot.prototype.update = function() {
  // If is not dead and haven't touched the goal update it.
  if (!this.dead && (distance(this.position, goalPosition)>goalRadius)) {
    // Using brain directions to calculate acceleration
    if (this.brain.directions.length > this.brain.steps) {
      this.acceleration = this.brain.directions[this.brain.steps];
      this.brain.steps += 1;
    } else {
      // if the Dot runs out of directions it will die
      this.dead = true;
      return this.dead; // returning this.dead to keep track of dots that have died.
    }
    // adding acceleration to velocity.
    this.velocity = matrixAdd(this.velocity, this.acceleration);
    // adding velocity to position.
    this.position = matrixAdd(this.position, this.velocity);

    // Checking if the dot crashed
    const [posx, posy] = this.position;
    if (
      posx < 2 + this.radius * 2 ||
      posx > screenWidth - this.radius * 2 ||
      posy < 2 + this.radius * 2 ||
      posy > screenHeight - this.radius * 2
    ) {
      this.dead = true;
      return this.dead; // returning this.dead to keep track of dots that have died.
    }

  }
};

module.exports = Dot;
