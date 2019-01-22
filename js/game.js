var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  obstacleFrecuence: 50,
  scoreBoard: undefined,
  keys: {
    UP : 38,
    DOWN : 40
  },
  start: function (canvadId) {
    this.canvas = document.getElementById(canvadId);
    this.ctx = this.canvas.getContext("2d");
    
    this.reset();

    this.interval = setInterval(function () {
      this.clear();

//      this.framesCounter++;

      // controlamos que frameCounter no sea superior a 1000
//      if (this.framesCounter > 1000) {
//        this.framesCounter = 0;
//      }

      // controlamos la velocidad de generación de obstáculos
      if (this.obstacleFrecuence % 50 === 0) {
         this.generateObstacle();
         }
      this.obstacleFrecuence ++;
      this.generateSymbol();

//      this.score += 0.01;

      this.moveAll();
      this.drawAll();

  // eliminamos obstáculos fuera del canvas
      this.clearObstacles();

      this.clearSymbols();
       if (this.isCollision()) {
         this.gameOver();
       }
    }.bind(this), 1000 / this.fps);
  },
  stop: function () {
    clearInterval(this.interval);
  },
  //fin del juego
  gameOver: function () {

    this.stop();

    if (confirm("GAME OVER. Play again?")) {
      this.reset();
      this.start("canvas");
    }
  },
  //reseteamos todos los elementos del juego para empezar en un estado limpio
  reset: function () {
    this.background = new Background(this);
    this.player = new Player(this);
    //this.scoreBoard = ScoreBoard
    //this.framesCounter = 0;
    this.obstacles = [];
    this.symbols = [];
    this.score = 0;
  },
  //chequea si ha sucedido una colisión
  isCollision: function () {
    // colisiones genéricas 
    // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
    // esto chequea que el personaje no estén en colisión con cualquier obstáculo
    return this.obstacles.some(function (obstacle) {
      return (
        ((this.player.x + (this.player.w)-3) >= obstacle.x &&
          this.player.x < (obstacle.x + obstacle.w -5) &&
          this.player.y + (this.player.h/4) >= obstacle.y) &&
          obstacle.y + obstacle.h -12 > this.player.y
      );
    }.bind(this));
  },
  //esto elimina los obstáculos del array que estén fuera de la pantalla
  clearObstacles: function () {
    this.obstacles = this.obstacles.filter(function (obstacle) {
      return obstacle.x >= 0;
    });
  },
  
  clearSymbols: function () {
    
      this.symbols = this.symbols.filter(function (symbol) {
      return symbol.x >= 0;
    });
  },
  //generamos nuevos obstáculos
  generateObstacle: function () {
    this.obstacles.push(new Obstacle(this)); 
  },

  generateSymbol: function () {
    this.symbols.push(new Symbol(this)); 
  },

  //limpieza de la pantalla
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  //dibuja todos los assets del juego
  drawAll: function () {
    this.background.draw();
    this.player.draw();
    this.obstacles.forEach(function (obstacle) { obstacle.draw(); });
    this.symbols.forEach(function (symbol) { symbol.draw(); });
    //this.drawScore();
  },
  //mueve todos los objetos del escenario, el fondo, el jugador y los obstáculos
  moveAll: function () {
    this.background.move();
    this.player.move();
    this.obstacles.forEach(function (obstacle) { obstacle.move(); });
    this.symbols.forEach(function (symbol) { symbol.move(); });
  },
  //pinta el marcador
  //drawScore: function () {
  //  this.scoreBoard.update(this.score, this.ctx)
  //}
}