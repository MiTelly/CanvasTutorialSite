(function() {

let canvas19 = document.getElementById('canvas19');
let ctx73 = canvas19.getContext('2d');

let c;
let timer_is_on10 = 0;

let bigGreen2 = {x: 280, y: 150, color: 'green', dx: 3, dy: 3, width: 150, height: 150};
let smallWhite2 = {x: 150, y: 50, color: 'white', dx: 7, dy: 7, width: 20, height: 20};

function boxCollision4() {

  if ((bigGreen2.x >= canvas19.width - bigGreen2.width) || (bigGreen2.x <= 0)) {
    bigGreen2.dx = -bigGreen2.dx;
  }
  if ((bigGreen2.y >= canvas19.height - bigGreen2.height) || (bigGreen2.y <= 0)) {
    bigGreen2.dy = -bigGreen2.dy;
  }
  if ((smallWhite2.x >= canvas19.width - smallWhite2.width) || (smallWhite2.x <= 0)) {
    smallWhite2.dx = -smallWhite2.dx;
  }
  if ((smallWhite2.y >= canvas19.height - smallWhite2.height) || (smallWhite2.y <= 0)) {
    smallWhite2.dy = -smallWhite2.dy;
  }
}

function drawCanvas() {
  ctx73.clearRect(0,0,960,500);

  ctx73.fillStyle = smallWhite2.color;
  ctx73.fillRect(smallWhite2.x, smallWhite2.y, smallWhite2.width, smallWhite2.height);

  ctx73.fillStyle = bigGreen2.color;
  ctx73.fillRect(bigGreen2.x, bigGreen2.y, bigGreen2.width, bigGreen2.height);
}

function drawBoxes5() {
  growBoxes();
  drawCanvas();
  boxCollision4();

  bigGreen2.x += bigGreen2.dx;
  bigGreen2.y += bigGreen2.dy;

  smallWhite2.x += smallWhite2.dx;
  smallWhite2.y += smallWhite2.dy;
}

function growBoxes() {
  if (bigGreen2.x < smallWhite2.x + smallWhite2.width &&
     bigGreen2.x + bigGreen2.width > smallWhite2.x &&
     bigGreen2.y < smallWhite2.y + smallWhite2.height &&
     bigGreen2.height + bigGreen2.y > smallWhite2.y) {

      smallWhite2.width += 5;

        if (smallWhite2.x + smallWhite2.width >= canvas19.width) {
          smallWhite2.width = 20;
        }
  }
}

function reset12() {
    clearInterval(c);
    timer_is_on10 = 0;
}

function startSquare12() {
  if (!timer_is_on10) {
      timer_is_on10 = 1;
      c = setInterval(drawBoxes5,70);
  }
}

document.getElementById('reset12').addEventListener('click', reset12);
document.getElementById('startSquare12').addEventListener('click', startSquare12);

drawBoxes5();

})();
