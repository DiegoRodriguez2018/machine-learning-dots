const Brain = require('./Brain')
const { matrixAdd } = require('./math-utils');
// Creating the Dot class.
function Dot(position = [0, 0], velocity, acceleration) {
  this.radius = 5;
  this.position = position;
  this.velocity = [0, 0];
  this.acceleration = [0, 0];
  const lifeExpectancy = 10; // the number of directions it will change before it dies.
  this.brain = new Brain(lifeExpectancy); // Instantiating Brain with lifeExpectancy.
  this.dead = false;
}

Dot.prototype.show = function() {
  const c = document.getElementById('world');
  const ctx = c.getContext('2d');

  ctx.lineWidth = 2;
  ctx.strokeStyle = this.dead ? "red": "white";
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
      }else{
        // if the Dot runs out of directions it will die
        this.dead = true
      }
      // adding acceleration to velocity.
      this.velocity = matrixAdd(this.velocity, this.acceleration);
      // adding velocity to position.
      this.position = matrixAdd(this.position, this.velocity);
};

Dot.prototype.update =  function(){
  if(!this.dead){
    // const [posx,posy] =  this.position;
    // // if(posx<2 || posx>canvas.width){
    // // }
    this.move();
  }
}

module.exports = Dot;
