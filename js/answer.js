//constructor de obstáculos
function Answer(game,xColision,yColision,figure) {
  this.game = game;//constructor de obstáculos

  this.w = 35;
  this.h = 25;

  this.x = xColision; 
  this.y = yColision;

  this.img = new Image();
  this.img.src = function (figure) {
                      if (figure === "Right") {
                        return "./img/Blue_check.svg";
                      }
                      return "./img/x-mark-green-md.png";
                    }(figure)
  }

Answer.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};

