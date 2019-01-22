//constructor de obstáculos
var symbolsName = ["Redonda","Blanca","Negra","Doble Corchea","Cuaterna de SemiCorchea","SemiCorchea","Corchea","Silencio"];
var colorsHexa = ["#ffffff", "#298A08","#B40404"];
function Obstacle(game) {
  this.game = game;

  this.w = 90;
  this.h = 5;

  this.dx = 2;

  this.x = 1190; // BUSCAR LOS VALORES EN VARIABLES DE TAMAÑO DE LA PANTALLA
  this.y = Obstacle.prototype.randomLimit(70,500);
  this.symbolName = symbolsName [Obstacle.prototype.randomLimit(0,8)];
}

Obstacle.prototype.randomLimit = function(minNum,maxNumb){
  
  return minNum + Math.floor(Math.random()*(maxNumb-minNum));
      
} 

Obstacle.prototype.draw = function() {
  colorText = colorsHexa[Obstacle.prototype.randomLimit(0,3)];
 
  
  
  //this.game.ctx.strokeStyle = "#369";
  this.game.ctx.fillStyle = colorText;
  this.game.ctx.font = 'italic bold 20px verdana';
  this.game.ctx.fillText(this.symbolName, this.x, this.y, this.w, this.h);
  //this.game.ctx.fillStyle = "red";
  
  //this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
};

Obstacle.prototype.move = function() {
  this.x -= this.dx;
};