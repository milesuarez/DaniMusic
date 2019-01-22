//constructor de obstáculos
function Symbol(game) {
  this.game = game;//constructor de obstáculos


  this.w = 60;
  this.h = 60;

  this.dx = 65;

  this.x = 1190; // BUSCAR LOS VALORES EN VARIABLES DE TAMAÑO DE LA PANTALLA
  this.y = 10;

  this.img = new Image();
  this.img.src = 'img/redonda.png';
}



Symbol.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};

Symbol.prototype.move = function() {
  this.x -= this.dx;
};