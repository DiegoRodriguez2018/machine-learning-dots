// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const Dot = require('./Dot');

// function spawn(pos){
//   const dot = new Dot(pos)
//   setInterval(()=>{
//     dot.move();
//     dot.show();
//   }, 500)
// }

const dot1 = new Dot([400,550]);

const c = document.getElementById('root');
const ctx = c.getContext('2d');

ctx.fillStyle = 'grey';
ctx.fillRect(0, 0, 800, 600); //clearing the canvas

// 60 hertz
const frequency = 60;
const period = (1 / frequency)*1000; // ms

setInterval(() => {
  ctx.fillRect(0, 0, 800, 600); //clearing the canvas

  dot1.show();
  dot1.move();

}, period);
