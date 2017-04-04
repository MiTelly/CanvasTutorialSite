(function() {

let canvas14 = document.getElementById('myCanvas7');
let ctx14 = canvas14.getContext('2d');
let timer_is_on10 = 0;
let b;

let boxes5 = [{x: 70, y: 250, dx: 5, dy: 5, color: 'lime'},
              {x: 310, y: 50, dx: 5, dy: 5, color: 'blue'},
              {x: 550, y: 350, dx: 5, dy: 5, color: 'purple'},
              {x: 790, y: 100, dx: 5, dy: 5, color: 'orange'}];

function start10() {
  ctx14.clearRect(0,0,960,500);

  boxes5.forEach(function(box) {
    ctx14.fillStyle = box.color;
    ctx14.fillRect(box.x, box.y, 100, 100);
  });
};

function draw10() {
  ctx14.clearRect(0,0,960,500);

  boxes5.forEach(function(box) {

    ctx14.fillStyle = box.color;
    ctx14.fillRect(box.x, box.y, 100, 100);

    if (box.x + 100 >= canvas14.width) {
      box.dx = -box.dx;
    }
    if (box.x <= 0) {
      box.dx = -box.dx;
    }
    if (box.y >= canvas14.height - 100) {
      box.dy = -box.dy;
    }
    if (box.y <= 0) {
      box.dy = -box.dy;
    }
    box.x += box.dx;
    box.y += box.dy;
  });
}

function reset10() {
    clearInterval(b);
    timer_is_on10 = 0;
}

function startSquare10() {
  if (!timer_is_on10) {
      timer_is_on10 = 1;
      b = setInterval(draw10,60);
  }
}

document.getElementById('reset10').addEventListener('click', reset10);
document.getElementById('startSquare10').addEventListener('click', startSquare10);

start10();

})();
