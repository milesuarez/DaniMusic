//constructor de obstáculos
function Symbol(game) {
  this.game = game;//constructor de simbolos musicales
  var maxSymbols = this.game.randomLimit(0,partitura.length); 
  this.name = partitura[maxSymbols].name;
  this.w = 60;
  this.h = 70;

  this.dx = 2;

  this.x = 1190; // BUSCAR LOS VALORES EN VARIABLES DE TAMAÑO DE LA PANTALLA
  this.y = 10;

  this.img = new Image();
  this.img.src = partitura[maxSymbols].image;

  this.imgPent = new Image();
  this.imgPent.src = "./img/musicSheet.png ";

}



Symbol.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};

Symbol.prototype.move = function() {
  this.x -= this.dx;
};