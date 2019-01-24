var Game = {
  
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  obstacleFrecuence: 50,
  newSymbol: false,
  score: 0,
  totalSymbol: 0,
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

      // controlamos la velocidad de generación de obstáculos
      if (this.obstacleFrecuence % 50 === 0) {this.generateObstacle(); }
      if (this.newSymbol || this.symbol.x < 0){
          this.generateSymbol();
          this.newSymbol = false;
          this.totalSymbol += 1;
      }
        
         // nuevoSymbol: false;
         // console.log(this.player.score);
          
      
      this.obstacleFrecuence ++;
      

      this.moveAll();
      this.drawAll();

      if (this.totalSymbol === 3){this.gameOver();}

  // eliminamos obstáculos fuera del canvas
      this.clearObstacles();

      //this.clearSymbols();
      if (this.isCollision()) {
        
          if (this.answer.figure = "Right") {
              this.answer.draw();
              this.newSymbol = true;
          }
        
      } 
      //else { if (this.answer != 'undefined') {console.log(this.answer);this.answer.draw();}}
            


      

    }.bind(this), 1000 / this.fps);
  },

  stop: function () {
    clearInterval(this.interval);
    
  },
  //fin del juego
  
  gameOver: function () {
    this.stop();
    var scoreText = "GAME OVER. " + this.score + " Aciertos de " + this.totalSymbol + " simbolos, Play again?" ;
    // debugger;
    this.drawScore();
    if (confirm(scoreText)) {
      this.reset();
      this.start("canvas");
    }
  },

  //reseteamos todos los elementos del juego para empezar en un estado limpio
  reset: function () {
    this.background = new Background(this);
    this.player = new Player(this);
    this.generateSymbol(this);
    this.answer ="undefined"
    this.scoreBoard = ScoreBoard;
    this.score = 0;
    this.totalSymbol = 0;
    //this.framesCounter = 0;
    this.obstacles = [];
    //this.symbols = [];
    
  },

  //chequea si ha sucedido una colisión
  isCollision: function () {
    // colisiones genéricas 
    // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
    // esto chequea que el personaje no estén en colisión con cualquier obstáculo
       
  //  var indexColision = this.obstacles.forEach(function (element) {
  //      if ((this.player.x + (this.player.w)-3) >= element.x &&
  //            this.player.x < (this.element.x + element.w -5) &&
  //            this.player.y + (this.player.h/4) >= element.y &&
  //            element.y + element.h -12 > this.player.y) {
  //              return index
  //            }
  //      else return -1;
  //          });
  //  if (indexColision != -1 && obstacles[indexColision].symbolName == this.symbol.name) {
  //      this.obstacles.splice(index,1);
  //      return true;
  //      }
  //  return false
 
        var i = 0;
        var colision = false;
        while ( i < this.obstacles.length && !colision ) {
            if ((this.player.x + (this.player.w)-3) >= this.obstacles[i].x &&
            this.player.x < (this.obstacles[i].x + this.obstacles[i].w -5) &&
            this.player.y + (this.player.h/2) >= this.obstacles[i].y &&
            this.obstacles[i].y + this.obstacles[i].h -12 > this.player.y) {
                if (this.obstacles[i].symbolName == this.symbol.name) {
                    colision = true;
                    this.obstacles.splice(i,1);
                    this.generateAnswer(this.player.x,this.player.y,"Right");
                    this.score += 1;
                }
                else {
                    this.generateAnswer(this.player.x,this.player.y,"Wrong");
                }
                
            }
            i++  
        }
        return colision;
        
    //return this.obstacles.some(function (obstacle) {
    //  return (
    //    ((this.player.x + (this.player.w)-3) >= obstacle.x &&
    //      this.player.x < (obstacle.x + obstacle.w -5) &&
    //      this.player.y + (this.player.h/4) >= obstacle.y) &&
    //      obstacle.y + obstacle.h -12 > this.player.y
    //  );
    //}.bind(this));
  },
  
  //esto elimina los obstáculos del array que estén fuera de la pantalla
  clearObstacles: function () {
    this.obstacles = this.obstacles.filter(function (obstacle) {
      return obstacle.x + obstacle.w >= 0;
    });
  },
  
  //clearSymbols: function () {
  //  
  //    this.symbols = this.symbols.filter(function (symbol) {
  //    return symbol.x >= 0;
  //  });
  //},
  //generamos nuevos obstáculos
  generateObstacle: function () {
    this.obstacles.push(new Obstacle(this)); 
  },

  generateSymbol: function () {
    this.symbol = new Symbol(this); //this.symbols.push(new Symbol(this)); 
    console.log(this.symbol);
  },

  generateAnswer(xColision,yColision,figure) {
    this.answer = new Answer (this,xColision,yColision,figure); 

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
    this.symbol.draw();
    //this.symbols.forEach(function (symbol) { symbol.draw(); });
    this.drawScore();
  },
  //mueve todos los objetos del escenario, el fondo, el jugador y los obstáculos
  moveAll: function () {
    this.background.move();
    this.player.move();
    this.obstacles.forEach(function (obstacle) { obstacle.move(); });
    this.symbol.move();
    // this.symbols.forEach(function (symbol) { symbol.move(); });
  },
 // pinta el marcador
  drawScore: function () {
    this.scoreBoard.update(this.score, this.totalSymbol, this.ctx)
  },

  randomLimit: function (minNum,maxNumb){
  
    return minNum + Math.floor(Math.random()*(maxNumb-minNum));
        
  } 
  
}