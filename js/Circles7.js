(function() {

let canvas21 = document.getElementById('myCanvas8');
let ctx21 = canvas21.getContext('2d');
let timer2_is_on = 0;
let w;

let circles = [{x:100,y:200,dx:-10,dy:5,radius:40,color:'#99CCFF'},
            {x:200,y:500,dx:5,dy:-5,radius:40,color:'#C69633'},
            {x:250,y:150,dx:-5,dy:10,radius:40,color:'#000090'},
            {x:300,y:500,dx:12,dy:-3,radius:40,color:'red'},
            {x:450,y:250,dx:-3,dy:13,radius:40,color:'lime'},
            {x:600,y:350,dx:8,dy:-8,radius:40,color:'purple'},
            {x:750,y:350,dx:-2,dy:10,radius:40,color:'blue'},
            {x:900,y:400,dx:9,dy:-4,radius:40,color:'orange'},
            {x:650,y:250,dx:-16,dy:4,radius:40,color:'#FF9C00'},
            {x:300,y:400,dx:10,dy:-5,radius:40,color:'#C9C9F3'},
            {x:500,y:350,dx:-8,dy:4,radius:40,color:'pink'},
            {x:150,y:100,dx:7,dy:-5,radius:40,color:'#585858'}];

function draw21() {
  ctx21.clearRect(0,0,canvas21.width,canvas21.height);

    circles.forEach(function(ball) {
      ball.x += ball.dx;
      ball.y += ball.dy;

      ctx21.beginPath();
      ctx21.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, true);
      ctx21.closePath();
      ctx21.fillStyle = ball.color;
      ctx21.fill();

        if (ball.x >= (canvas21.width-ball.radius) || ball.x <= ball.radius) {
          ball.dx =- ball.dx;
        }
        if (ball.y >= (canvas21.height-ball.radius) || ball.y <= ball.radius) {
          ball.dy =- ball.dy;
        }
    });
};

function start21() {
    circles.forEach(function(ball) {

      ball.x += ball.dx;
      ball.y += ball.dy;

      ctx21.beginPath();
      ctx21.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, true);
      ctx21.closePath();
      ctx21.fillStyle = ball.color;
      ctx21.fill();
    });
};

function reset2() {
    clearInterval(w);
    timer2_is_on = 0;
}

function startBalls2() {
  if (!timer2_is_on) {
      timer2_is_on = 1;
      w = setInterval(draw21, 100);
  }
}

document.getElementById('reset2').addEventListener('click', reset2);
document.getElementById('startBalls2').addEventListener('click', startBalls2);

start21();

})();
