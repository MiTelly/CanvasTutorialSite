(function() {

let canvas28 = document.getElementById("myCanvas13");
let ctx28 = canvas28.getContext('2d');
let timer_is_on7 = 0;
let y;

let circle1 = {x: 480, y: 350, dx: 0, dy: 0, radius: 300, color: 'blue'};
let circle2 = {x: 380, y: 250, dx: 5, dy: 5, radius: 50, color: 'red'};

function draw8() {
  ctx28.clearRect(0,0,canvas28.width,canvas28.height);
  drawBigCircle();
  updateSmallCircle();
  circleDeflect();
}

function drawBigCircle() {
  ctx28.beginPath();
  ctx28.arc(circle1.x, circle1.y, circle1.radius, 0, Math.PI*2, true);
  ctx28.closePath();
  ctx28.fillStyle = circle1.color;
  ctx28.fill();
}

function updateSmallCircle() {
  circle2.x += circle2.dx;
  circle2.y += circle2.dy;

  ctx28.beginPath();
  ctx28.arc(circle2.x, circle2.y, circle2.radius, 0, Math.PI*2, true);
  ctx28.closePath();
  ctx28.fillStyle = circle2.color;
  ctx28.fill();
}

function circleDeflect() {
  let xDist = (circle2.x-circle1.x) * (circle2.x-circle1.x);
  let yDist = (circle2.y-circle1.y) * (circle2.y-circle1.y);

  if ( (Math.sqrt(xDist + yDist) + circle2.radius) > (circle1.radius) ){
    circle2.dx = -circle2.dx;
    circle2.dy = -circle2.dy;
  }
}

function reset7() {
    clearInterval(y);
    timer_is_on7 = 0;
}

function startBalls7() {
  if (!timer_is_on7) {
      timer_is_on7 = 1;
      y = setInterval(draw8,50);
  }
}

document.getElementById('reset7').addEventListener('click', reset7);
document.getElementById('startBalls7').addEventListener('click', startBalls7);

drawBigCircle();
updateSmallCircle();


})();
