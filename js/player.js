//caracter principal del juego
function Player(game) {
  this.game = game;
 
  this.x = this.game.canvas.width * 0.1;
  this.y = this.game.canvas.height * 0.45;

  this.img = new Image();
  this.img.src = 'img/baton.png';
  
  // número de imágenes diferentes
 // this.img.frames = 3;
 // this.img.frameIndex = 0;

  // medidas de la imagen a representar en el canvas
  this.w = 60;
  this.h = 70;

  this.score = 0;
  this.setListeners();
}

Player.prototype.draw = function() {
  // Documentación drawImage:
  // https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
  //this.game.ctx.drawImage(
  //  this.img,
  //  this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
  //  0,
  //  Math.floor(this.img.width / this.img.frames),
  //  this.img.height,
  //  this.x,
  //  this.y,
  //  this.w,
  //  this.h
  //);
  
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

  this.animateImg();

//  this.bullets = this.bullets.filter(function(bullet) {
//    return bullet.x < this.game.canvas.width;
//  }.bind(this));
//
//  this.bullets.forEach(function(bullet) {
//    bullet.draw();
//    bullet.move();
//  });
};

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    
    switch (event.keyCode) {
      case 38:
          if (this.y > (30 +this.h/2)) this.y -= 30;
          break;
      case 40:
          if (this.y < (this.game.canvas.height - this.h - 15)) this.y += 30;
          break;
    }
    this.draw();
    //if (event.keyCode === this.game.keys.TOP_KEY && this.y == this.y0) {
    //  this.y -= 5;
    //  this.vy -= 10;
    //} else if (event.keyCode == this.game.keys.SPACE) {
    //  this.shoot();
    //}
  }.bind(this);
};

//Player.prototype.shoot = function() {
//  var bullet = new Bullet(this.game, this.x + this.w, this.y + this.h / 2);
//
//  this.bullets.push(bullet);
//};

Player.prototype.animateImg = function() {
  // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
  //if (this.game.framesCounter % 6 === 0) {
  // this.img.frameIndex += 1;

    // Si el frame es el último, se vuelve al primero
  //  if (this.img.frameIndex > 2) this.img.frameIndex = 0;
  //}
};

Player.prototype.move = function() {
 // // Aumenta la velocidad en el eje y.
 // var gravity = 0.4;
//
 // // solo salta cuando el personaje está en el suelo
 // if (this.y >= this.y0) {
 //   this.vy = 1;
 //   this.y = this.y0;
 // } else {
 //   this.vy += gravity;
 //   this.y += this.vy;
 // }
};