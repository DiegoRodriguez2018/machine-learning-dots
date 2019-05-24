const Dot = require('./Dot');

function Population(size) {
  this.size = size;
  this.dots = [];
  for (let index = 0; index < this.size; index++) {
    this.dots.push(new Dot());
  }
  this.dotsAlive = size;
}

Population.prototype.show = function() {
  for (let index = 0; index < this.size; index++) {
    this.dots[index].show();
  }
  const c = document.getElementById('world');
  const ctx = c.getContext('2d');

  const message = `Dots Alive:${this.dotsAlive}}`;
  ctx.fillStyle = 'white';
  ctx.font = '18px Arial';
  ctx.fillText(message, 0, 590);
  ctx.fillStyle = 'grey';
};

Population.prototype.update = function() {
  for (let index = 0; index < this.size; index++) {
    // calling update, if the return value is true the dot died.  
    const itDied = this.dots[index].update(); 
    if (itDied) {
      this.dotsAlive--;
    }
  }
};


module.exports = Population;
