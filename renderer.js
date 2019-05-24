// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {
  screenWidth,
  screenHeight,
  goalPosition,
  goalRadius
} = require('./projectConfig');
const Population = require('./Population');

const c = document.getElementById('world');
const ctx = c.getContext('2d');
// setting canvas width and height
ctx.canvas.width = screenWidth;
ctx.canvas.height = screenHeight;
ctx.fillStyle = 'grey';
ctx.fillRect(0, 0, screenWidth, screenHeight); //clearing the canvas

// 60 hertz
const frequency = 60;
const period = (1 / frequency) * 1000; // ms

function showGoal() {
  const c = document.getElementById('world');
  const ctx = c.getContext('2d');

  ctx.lineWidth = 15;
  ctx.strokeStyle = 'lightgreen';
  ctx.beginPath();
  // context.arc(x,y,r,sAngle,eAngle,counterclockwise);
  ctx.arc(goalPosition[0], goalPosition[1], goalRadius, 0, 2 * Math.PI);
  ctx.stroke();
}

let gen = 1;
let init = true;
let population;
setInterval(() => {
  if (init) {
    const populationSize = 20;
    population = new Population(populationSize);
    init = false;
  } else {
    // checking if all the dots are dead
    if (population.dotsAlive < 1) {
      init = true;
      gen += 1;
      // genetic algorithm will go here
      // calculateFitness, naturalSelection and mutation
    }
    ctx.fillRect(0, 0, screenWidth, screenHeight); //clearing the canvas
    showGoal();
    population.show();
    population.update();
    const message = `Dots Alive:${population.dotsAlive}, Generation: ${gen}`;
    ctx.fillStyle = 'white';
    ctx.font = '18px Arial';
    ctx.fillText(message, 0, 590);
    ctx.fillStyle = 'grey';
  }
}, period);
