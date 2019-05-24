// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {screenWidth, screenHeight} = require('./projectConfig');
const Dot = require('./Dot');

const dot1 = new Dot([400, 550]);

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

setInterval(() => {
  ctx.fillRect(0, 0, screenWidth, screenHeight); //clearing the canvas
  dot1.show();
  dot1.update();
}, period);
