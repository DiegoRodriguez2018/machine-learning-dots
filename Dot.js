const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [-1, 1],
  [1, 1],
  [1, -1]
];

function Dot(position = [0, 0], radius = 5) {
  this.position = position;
  this.radius = radius;
  this.increment = 10;
}

Dot.prototype.show = function() {
  const c = document.getElementById('root');
  const ctx = c.getContext('2d');
  ctx.beginPath();
  // context.arc(x,y,r,sAngle,eAngle,counterclockwise);
  ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI);
  ctx.stroke();
};

Dot.prototype.move = function() {
  const randomIndex = Math.floor(Math.random() * directions.length);
  const randomDirection = directions[randomIndex];
  this.position[0] -= this.increment * randomDirection[0];
  this.position[1] -= this.increment * randomDirection[1];
};

module.exports = Dot;
