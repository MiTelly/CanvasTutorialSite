(function() {

let canvas13 = document.getElementById('myCanvas6');
let ctx13 = canvas13.getContext('2d');
let a;
let timer_is_on9 = 0;

let boxes4 = [{x: 70, y: 250, dx: 5, color: 'lime'},
              {x: 310, y: 50, dx: 5, color: 'blue'},
              {x: 550, y: 350, dx: 5, color: 'purple'},
              {x: 790, y: 100, dx: 5, color: 'orange'}];

function start9() {
  boxes4.forEach(function(box) {
    ctx13.fillStyle = box.color;
    ctx13.fillRect(box.x, box.y, 100, 100);
  });
}

function draw9() {
  ctx13.clearRect(0,0,960,500);

  boxes4.forEach(function(box) {

    ctx13.fillStyle = box.color;
    ctx13.fillRect(box.x, box.y, 100, 100);

    if (box.x + 100 >= canvas13.width) {
      box.dx = -box.dx;
    }
    if (box.x <= 0) {
      box.dx = -box.dx;
    }

    box.x += box.dx;
  })
}

function reset9() {
    clearInterval(a);
    timer_is_on9 = 0;
}

function startSquare9() {
  if (!timer_is_on9) {
      timer_is_on9 = 1;
      a = setInterval(draw9,60);
  }
}

document.getElementById('reset9').addEventListener('click', reset9);
document.getElementById('startSquare9').addEventListener('click', startSquare9);

start9();

})();
