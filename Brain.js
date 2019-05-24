const { randomize } = require('./math-utils');
/**
 * @param size - the number of possible directions the brain calculates
 */
function Brain(size) {
  const directions = []; // 2d array to store random directions
  for (let index = 0; index < size; index++) {
    // getting a random angle from 0 to 2PI (in radians)
    const randomAngle = randomize(2 * Math.PI);
    // calculating a random direction based on randomAngle;
    const randomDirection = [Math.cos(randomAngle),Math.sin(randomAngle)];
    // adding randomVector to directions
    directions.push(randomDirection);
  }
}

module.exports = Brain;

