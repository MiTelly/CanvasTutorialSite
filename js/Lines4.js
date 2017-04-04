(function() {

let canvas11 = document.getElementById("myCanvas4");
let ctx11 = canvas11.getContext('2d');

let randX1,randX2,randY1,randY2;
let t;

let dx1 = 5;
let dy1 = 5;
let dx2 = 5;
let dy2 = 5;

let timer_is_on = 0;

function makeCircle4(x,y) {
  ctx11.beginPath();
  ctx11.arc(x, y, 8, 0, Math.PI*2, true);
  ctx11.closePath();
  ctx11.fillStyle = "blue";
  ctx11.fill();
}

function makeLine4(a,b,c,d) {
  ctx11.beginPath();
  ctx11.moveTo(a,b);
  ctx11.lineTo(c,d);
  ctx11.strokeStyle = "blue";
  ctx11.lineWidth = "5";
  ctx11.stroke();
}

function randomNum() {
  randX1 = Math.floor(Math.random() * 300 + 25);
  randY1 = Math.floor(Math.random() * 300 + 25);
  randX2 = randX1 + 150;
  randY2 = randY1 + 150;
}

function draw4() {
    ctx11.clearRect(0,0,960,500);
    randX1 += dx1;
    randY1 += dy1;

    randX2 += dx2;
    randY2 += dy2;

    makeCircle4(randX1, randY1);
    makeCircle4(randX2, randY2);
    makeLine4(randX1,randY1,randX2,randY2);

    if (randX1 > canvas11.width) {
      randX1 = canvas11.width;
      dx1 = -dx1;
    } else if (randX1 < 0) {
      randX1 = 0;
      dx1 = -dx1;
    }
    else if (randX2 > canvas11.width) {
      randX2 = canvas11.width;
      dx2 = -dx2;
    }
    else if (randX2 < 0) {
      randX2 = 0;
      dx2 = -dx2;
    } else if (randY1 > canvas11.height) {
      randY1 = canvas11.height;
      dy1 = -dy1;
    } else if (randY1 < 0) {
      randY1 = 0;
      dy1 = -dy1;
    } else if (randY2 > canvas11.height) {
      randY2 = canvas11.height;
      dy2 = -dy2;
    } else if (randY2 < 0) {
      randY2 = 0;
      dy2 = -dy2;
    }
}

function reset() {
    clearInterval(t);
    timer_is_on = 0;
}

function startLine() {
  if (!timer_is_on) {
      timer_is_on = 1;
      t = setInterval(draw4,90);
  }
}

function totalReset() {
  randomNum();

  dx1 = 5;
  dy1 = 5;
  dx2 = 5;
  dy2 = 5;

  timer_is_on = 0;
  clearInterval(t);
  startLine();
}

document.getElementById('reset').addEventListener('click', reset);
document.getElementById('startLine').addEventListener('click', startLine);
document.getElementById('totalReset').addEventListener('click', totalReset);

randomNum();
draw4();

})();
