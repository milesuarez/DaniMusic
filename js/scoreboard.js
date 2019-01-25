//este literal mantiene el marcador del juego con su puntuación
var ScoreBoard = {


update: function (score,total, ctx) {
  
            var x = 510;
            var y = 480;
            ctx.font = "30px sans-serif";
            ctx.fillStyle = "blue";
            score_total = Math.floor(score)+ "/" + Math.floor(total);
            ctx.fillText(score_total, x, y);
        }
}