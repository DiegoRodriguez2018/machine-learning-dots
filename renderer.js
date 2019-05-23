// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const Dot = require('./Dot');

const dot1 = new Dot([400,550]);

const c = document.getElementById('root');
const ctx = c.getContext('2d');

ctx.fillStyle = 'grey';
ctx.fillRect(0, 0, 800, 600); //clearing the canvas

setInterval(() => {
  ctx.fillRect(0, 0, 800, 600); //clearing the canvas
  dot1.move();
  dot1.show();
}, 500);
