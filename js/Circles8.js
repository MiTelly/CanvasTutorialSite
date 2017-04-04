(function() {

let canvas24 = document.getElementById('myCanvas9');
let ctx24 = canvas24.getContext('2d');

let timer_is_on;

let ball21 = {
  x: 700,
  y: 450,
  dx: 13,
  dy: 9,
  radius: 100,
  color: 'blue'
};

let ball22 = {
x: 170,
y: 170,
dx: 7,
dy: 14,
radius: 100,
color: 'lime'
};

let ball23 = {
x: 380,
y: 410,
dx: 5,
dy: 5,
radius: 100,
color: 'orange'
};

let ball24 = {
x: 650,
y: 140,
dx: 17,
dy: 3,
radius: 100,
color: 'green'
};

function canvasStart(ball) {
  ctx24.beginPath();
  ctx24.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, true);
  ctx24.closePath();
  ctx24.fillStyle = ball.color;
  ctx24.fill();
}

function draw24() {
  ctx24.clearRect(0,0,canvas24.width,canvas24.height);

  updateCircle24(ball21);
  updateCircle24(ball22);
  updateCircle24(ball23);
  updateCircle24(ball24);

  ballCollision(ball21, ball22);
  ballCollision(ball21, ball23);
  ballCollision(ball21, ball24);
  ballCollision(ball22, ball23);
  ballCollision(ball22, ball24);
  ballCollision(ball23, ball24);
}

function updateCircle24(ball) {
  ball.x += ball.dx;
  ball.y += ball.dy;

  ctx24.beginPath();
  ctx24.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, true);
  ctx24.closePath();
  ctx24.fillStyle = ball.color;
  ctx24.fill();

  if (ball.x >= (canvas24.width-ball.radius) || ball.x <= ball.radius) {
    ball.dx =- ball.dx;
  }
  if (ball.y >= (canvas24.height-ball.radius) || ball.y <= ball.radius) {
    ball.dy =- ball.dy;
  }
}

function ballDeflect(a, b) {

    if (b.x >= b.radius && b.x <= (canvas24.width-b.radius) && b.y >= b.radius && b.y <=
    (canvas24.height-b.radius) && a.x >= a.radius && a.x <= (canvas24.width-a.radius) &&
    a.y >= a.radius && a.y <= (canvas24.height-a.radius) ) {

          a.dx =- a.dx;
          a.dy =- a.dy;

          b.dx =- b.dx;
          b.dy =- b.dy;

      let random1 = Math.floor((Math.random() * 155) + 100);
      let random2 = Math.floor((Math.random() * 255) + 1);
      let random3 = Math.floor((Math.random() * 255) + 1);
      let random4 = Math.floor((Math.random() * 155) + 100);
      let random5 = Math.floor((Math.random() * 255) + 1);
      let random6 = Math.floor((Math.random() * 255) + 1);

      a.color = 'rgb('+random1+','+random2+','+random3+')';
      b.color = 'rgb('+random4+','+random5+','+random6+')';
    }
}

function ballCollision(a, b){
  let xDist = (a.x - b.x) * (a.x - b.x);
  let yDist = (a.y - b.y) * (a.y - b.y);

  if ((Math.sqrt(xDist + yDist)) < (a.radius * 1.03 + b.radius * 1.03) ){
    b.radius *= 0.95;
    a.radius *= 0.95;

    ballDeflect(a, b);
  }
}

function reset() {
    clearInterval(v);
    timer_is_on = 0;
}

function startBalls() {
  if (!timer_is_on) {
      timer_is_on = 1;
      v = setInterval(draw24, 130);
  }
}

function totalReset() {

  ball21 = {
    x: 700,
    y: 450,
    dx: 13,
    dy: 9,
    radius: 100,
    color: 'blue'
  };

  ball22 = {
  x: 170,
  y: 170,
  dx: 7,
  dy: 14,
  radius: 100,
  color: 'lime'
  };

  ball23 = {
  x: 380,
  y: 410,
  dx: 5,
  dy: 5,
  radius: 100,
  color: 'orange'
  };

  ball24 = {
  x: 650,
  y: 140,
  dx: 17,
  dy: 3,
  radius: 100,
  color: 'green'
  };

  timer_is_on = 0;
  clearInterval(v);
  startBalls();

}

document.getElementById('reset').addEventListener('click', reset);
document.getElementById('startBalls').addEventListener('click', startBalls);
document.getElementById('totalReset').addEventListener('click', totalReset);

canvasStart(ball21);
canvasStart(ball22);
canvasStart(ball23);
canvasStart(ball24);

})();
