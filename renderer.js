// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
console.log('hi from renderer');
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

function showCaptions(message){
  ctx.fillStyle = 'white';
  ctx.font = '18px Arial';
  ctx.fillText(message, 0, 590);
  ctx.fillStyle = 'grey';
}

// 60 hertz
const frequency = 60;
const period = (1 / frequency) * 1000; // ms

let gen = 1;
let init = true;
let population;
const populationSize = 20;
setInterval(() => {
  if (init) {
    population = new Population(populationSize);
    init = false;
  } else {
    // Calculating how many Dots are still trying to get to the goal.
    const dotsTrying = population.dotsAlive - population.dotsSuccessful;
    // console.log('dotsTrying',': ', dotsTrying);
    
    if (dotsTrying < 1) {
      init = true;
      gen += 1;
      // genetic algorithm will go here
      // calculateFitness, naturalSelection and mutation
    }
    ctx.fillRect(0, 0, screenWidth, screenHeight); //clearing the canvas
    showGoal();
    population.show();
    population.update();
    // Message to show
    const message = `Dots Alive:${population.dotsAlive}, Dots Successful:${population.dotsSuccessful},Generation: ${gen}`;
    showCaptions(message);
  }
}, period);
