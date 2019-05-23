function Dot(position=[0,0], radius=5) {
  this.position = position
  this.radius = radius
}

Dot.prototype.show = function () {
  var c = document.getElementById('root');
  var ctx = c.getContext('2d');
  ctx.beginPath();
  // context.arc(x,y,r,sAngle,eAngle,counterclockwise);
  ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI);
  ctx.stroke();
};

Dot.prototype.move = function(){
  this.position[0] += 1 ;
  this.position[1] += 1 ;

}

module.exports = Dot;
