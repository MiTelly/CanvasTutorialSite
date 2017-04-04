(function() {

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let box1 = {x: 70, y: 250, color: 'lime'};
let box2 = {x: 310, y: 50, color: 'blue'};
let box3 = {x: 550, y: 350, color: 'purple'};
let box4 = {x: 790, y: 100, color: 'orange'};

function draw(box) {
  ctx.fillStyle = box.color;
  ctx.fillRect(box.x, box.y, 100, 100);
}

draw(box1);
draw(box2);
draw(box3);
draw(box4);

})();
