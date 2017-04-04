(function() {

let canvas = document.getElementById('myCanvas6');
let ctx = canvas.getContext('2d');
let d, timer_is_on;

let circle1 = {
  x: 180,
  y: 200,
  dx: 5,
  dy: 5,
  radius: 50,
  color: 'red'
};

let circle2 = {
  x: 700,
  y: 400,
  dx: -5,
  dy: 5,
  radius: 110,
  color: 'blue'
};

function start6() {
  ctx.beginPath();
  ctx.arc(circle1.x, circle1.y, circle1.radius, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = circle1.color;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(circle2.x, circle2.y, circle2.radius, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = circle2.color;
  ctx.fill();
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  updateCircle(circle2);
  updateCircle(circle1);
}

function updateCircle(ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = ball.color;
  ctx.fill();

  if (ball.x > canvas.width - ball.radius || ball.x < ball.radius) {
    ball.dx =- ball.dx;
  }
  if (ball.y > canvas.height - ball.radius || ball.y < ball.radius) {
    ball.dy =- ball.dy;
  }
  ball.x += ball.dx;
  ball.y += ball.dy;

}

function reset4() {
    clearInterval(d);
    timer_is_on = 0;
}

function startBalls4() {
  if (!timer_is_on) {
      timer_is_on = 1;
      d = setInterval(draw, 50);
  }
}

document.getElementById('reset4').addEventListener('click', reset4);
document.getElementById('startBalls4').addEventListener('click', startBalls4);

start6();


})();
