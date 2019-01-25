//constructor de obstáculos

var colorsHexa = ["#04303d", "#000","#B40404"];

function Obstacle(game) {
  this.game = game;
  
  this.w = 70;
  this.h = 19;
  
  this.dx = this.game.randomLimit(2,6);;
  
  this.x = this.game.canvas.width;
  this.y = this.game.randomLimit(110,420);
  
  var maxSymbols = this.game.randomLimit(0,this.game.partitura.length); 
  this.symbolName = this.game.partitura[maxSymbols].name; 

  this.colorText = colorsHexa[this.game.randomLimit(0,3)]
}

Obstacle.prototype.draw = function() {
  
  this.game.ctx.strokeStyle = this.colorText;
  this.game.ctx.fillStyle = this.colorText;
  this.game.ctx.font = 'italic bold 20px verdana';
  this.game.ctx.fillText(this.symbolName, this.x, this.y, this.w, this.h);
  //this.game.ctx.fillStyle = "red";
  
  //this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
};

Obstacle.prototype.move = function() {
  this.x -= this.dx;
};