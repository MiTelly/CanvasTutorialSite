(function() {

let canvas12 = document.getElementById('myCanvas5');
let ctx12 = canvas12.getContext('2d');
let timer_is_on8 = 0;
let z;

let boxLime = {x: 70, y: 200, dx: 5};

function start8() {
  ctx12.fillStyle = "lime";
  ctx12.fillRect(boxLime.x, boxLime.y, 100, 100);
}

function draw8() {
  ctx12.clearRect(0,0,960,500);
  ctx12.fillStyle = boxLime.color;
  ctx12.fillRect(boxLime.x, boxLime.y, 100, 100);

  if (boxLime.x + 100 >= canvas12.width) {
    boxLime.dx = -boxLime.dx;
  }
  if (boxLime.x <= 0) {
    boxLime.dx = -boxLime.dx;
  }

  boxLime.x += boxLime.dx;
}

function reset8() {
    clearInterval(z);
    timer_is_on8 = 0;
}

function startSquare8() {
  if (!timer_is_on8) {
      timer_is_on8 = 1;
      z = setInterval(draw8,50);
  }
}

document.getElementById('reset8').addEventListener('click', reset8);
document.getElementById('startSquare8').addEventListener('click', startSquare8);

start8();

})();
