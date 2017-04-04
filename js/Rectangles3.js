(function() {

let canvas14 = document.getElementById('canvas14');
let ctx68 = canvas14.getContext('2d');

let timer_is_on9 = 0;
let b;

let box2 = {x: 150, y: 100, color: 'blue', dx: -5, dy: -2, width: 350, height: 200};
let box3 = {x: 750, y: 150, color: 'green', dx: -2, dy: 5, width: 120, height: 150};
let box4 = {x: 450, y: 350, color: 'yellow', dx: 5, dy: -5, width: 250, height: 50};

function draw2() {
  ctx68.clearRect(0,0,960,500);
  drawSquare2(box2);
  drawSquare2(box3);
  drawSquare2(box4);
}

function drawSquare2(box) {
  ctx68.fillStyle = box.color;
  ctx68.fillRect(box.x, box.y, box.width, box.height);

  if ((box.x >= canvas14.width - box.width) || (box.x <= 0)) {
    box.dx = -box.dx;
  }
  if ((box.y >= canvas14.height - box.height) || (box.y <= 0)) {
    box.dy = -box.dy;
  }

  box.x += box.dx;
  box.y += box.dy;
}

function reset11() {
    clearInterval(b);
    timer_is_on9 = 0;
}

function startSquare11() {
  if (!timer_is_on9) {
      timer_is_on9 = 1;
      b = setInterval(draw2,70);
  }
}

document.getElementById('reset11').addEventListener('click', reset11);
document.getElementById('startSquare11').addEventListener('click', startSquare11);

draw2();

})();
