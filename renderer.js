// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const Dot = require('./Dot')

const dot1 = new Dot();

setInterval(()=>{
  dot1.move();
  dot1.show();
}, 1000)

