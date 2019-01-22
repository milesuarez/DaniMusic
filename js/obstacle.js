//constructor de obstáculos
function Obstacle(game) {
  this.game = game;

  this.w = 15;
  this.h = 15;

  this.dx = 10;

  this.x = 1190; // BUSCAR LOS VALORES EN VARIABLES DE TAMAÑO DE LA PANTALLA
  this.y = Obstacle.prototype.randomLimit(100,500);
}

Obstacle.prototype.randomLimit = function(minNum,maxNumb){
  
  return Math.floor(Math.random()*(maxNumb-minNum+minNum));
      
} 

Obstacle.prototype.draw = function() {
  this.game.ctx.fillStyle = "red";
  this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
};

Obstacle.prototype.move = function() {
  this.x -= this.dx;
};