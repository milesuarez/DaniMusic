//constructor de obstáculos
function Symbol(game) {
  this.game = game;//constructor de simbolos musicales
  var maxSymbols = this.game.randomLimit(0,this.game.partitura.length); 
  this.name = this.game.partitura[maxSymbols].name;
  this.w = 60;
  this.h = 90;

  this.dx = 1;

  this.x = 1190; // BUSCAR LOS VALORES EN VARIABLES DE TAMAÑO DE LA PANTALLA
  this.y = 10;

  this.img = new Image();
  this.img.src = this.game.partitura[maxSymbols].image;

  }



Symbol.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};

Symbol.prototype.move = function() {
  this.x -= this.dx;
};