// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {screenWidth, screenHeight} = require('./projectConfig');
const Population = require('./Population')
const populationSize = 20;
const population = new Population(populationSize);


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

function showGoal(){
  const goalPosition = [screenWidth/2,25]; 
  const goalRadius = 10;
  const c = document.getElementById('world');
  const ctx = c.getContext('2d');

  ctx.lineWidth = 15;
  ctx.strokeStyle = "lightgreen";
  ctx.beginPath();
  // context.arc(x,y,r,sAngle,eAngle,counterclockwise);
  ctx.arc(goalPosition[0], goalPosition[1], goalRadius, 0, 2 * Math.PI);
  ctx.stroke();
}

setInterval(() => {
  ctx.fillRect(0, 0, screenWidth, screenHeight); //clearing the canvas
  showGoal();
  population.show();
  population.update();
}, period);
