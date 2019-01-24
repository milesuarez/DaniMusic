//constructor de obstáculos

var colorsHexa = ["#ffffff", "#298A08","#B40404"];

function Obstacle(game) {
  this.game = game;
  
  this.w = 90;
  this.h = 8;
  
  this.dx = this.game.randomLimit(2,5);;
  
  this.x = this.game.canvas.width;
  this.y = this.game.randomLimit(100,420);
  
  var maxSymbols = this.game.randomLimit(0,partitura.length); 
  this.symbolName = partitura[maxSymbols].name; 

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