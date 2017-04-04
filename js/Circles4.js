(function () {

let canvas = document.getElementById("myCanvas5");
let ctx = canvas.getContext('2d');
let timer_is_on = 0;
let m;

let ball = {
  x: 280,
  y: 300,
  dx: 5,
  dy: 5,
  radius: 110,
  color: 'blue'
};

function start() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = ball.color;
  ctx.fill();
};

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  updateCircle(ball);
};

function updateCircle(ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = ball.color;
  ctx.fill();

  if (ball.x > canvas.width - ball.radius || ball.x < ball.radius) {
    ball.dx =- ball.dx;
  }

  ball.x += ball.dx;
};

function reset() {
    clearInterval(m);
    timer_is_on = 0;
}

function startBalls() {
  if (!timer_is_on) {
      timer_is_on = 1;
      m = setInterval(draw, 50);
  }
}

document.getElementById('reset5').addEventListener('click', reset);
document.getElementById('startBalls5').addEventListener('click', startBalls);

start();

})();
