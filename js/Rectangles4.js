(function() {

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let blocks = [{x:0, y:0, width:50, height:100, color:'orange'},
              {x:0, y:100, width:50, height:100, color:'green'},
              {x:0, y:200, width:50, height:100, color:'blue'},
              {x:0, y:300, width:50, height:100, color:'red'},
              {x:0, y:400, width:50, height:100, color:'lime'},
              {x:50, y:0, width:50, height:100, color:'green'},
              {x:50, y:100, width:50, height:100, color:'blue'},
              {x:50, y:200, width:50, height:100, color:'red'},
              {x:50, y:300, width:50, height:100, color:'lime'},
              {x:50, y:400, width:50, height:100, color:'orange'},
              {x:100, y:0, width:50, height:100, color:'blue'},
              {x:100, y:100, width:50, height:100, color:'red'},
              {x:100, y:200, width:50, height:100, color:'lime'},
              {x:100, y:300, width:50, height:100, color:'orange'},
              {x:100, y:400, width:50, height:100, color:'green'},
              {x:150, y:0, width:50, height:100, color:'red'},
              {x:150, y:100, width:50, height:100, color:'lime'},
              {x:150, y:200, width:50, height:100, color:'orange'},
              {x:150, y:300, width:50, height:100, color:'green'},
              {x:150, y:400, width:50, height:100, color:'blue'},
              {x:200, y:0, width:50, height:100, color:'lime'},
              {x:200, y:100, width:50, height:100, color:'orange'},
              {x:200, y:200, width:50, height:100, color:'green'},
              {x:200, y:300, width:50, height:100, color:'blue'},
              {x:200, y:400, width:50, height:100, color:'red'},
              {x:910, y:0, width:50, height:100, color:'orange'},
              {x:910, y:100, width:50, height:100, color:'green'},
              {x:910, y:200, width:50, height:100, color:'blue'},
              {x:910, y:300, width:50, height:100, color:'red'},
              {x:910, y:400, width:50, height:100, color:'lime'},
              {x:860, y:0, width:50, height:100, color:'green'},
              {x:860, y:100, width:50, height:100, color:'blue'},
              {x:860, y:200, width:50, height:100, color:'red'},
              {x:860, y:300, width:50, height:100, color:'lime'},
              {x:860, y:400, width:50, height:100, color:'orange'},
              {x:810, y:0, width:50, height:100, color:'blue'},
              {x:810, y:100, width:50, height:100, color:'red'},
              {x:810, y:200, width:50, height:100, color:'lime'},
              {x:810, y:300, width:50, height:100, color:'orange'},
              {x:810, y:400, width:50, height:100, color:'green'},
              {x:760, y:0, width:50, height:100, color:'red'},
              {x:760, y:100, width:50, height:100, color:'lime'},
              {x:760, y:200, width:50, height:100, color:'orange'},
              {x:760, y:300, width:50, height:100, color:'green'},
              {x:760, y:400, width:50, height:100, color:'blue'},
              {x:710, y:0, width:50, height:100, color:'lime'},
              {x:710, y:100, width:50, height:100, color:'orange'},
              {x:710, y:200, width:50, height:100, color:'green'},
              {x:710, y:300, width:50, height:100, color:'blue'},
              {x:710, y:400, width:50, height:100, color:'red'}];


let ball = {x: 500, y: 430, dx: -4, dy: -3, radius: 10, color: 'white'};
let t;
let timer_is_on1 = 0;

function draw() {
  ctx.clearRect(0,0,960,500);
  drawBall();
  buildBlocks();
  hitCanvasWall();
  hitBlock();
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = ball.color;
  ctx.fill()

  ball.x += ball.dx;
  ball.y += ball.dy;
}

function buildBlocks() {
  blocks.forEach(function(block) {
    ctx.fillStyle = block.color;
    ctx.fillRect(block.x, block.y, block.width, block.height);
  });
}

function hitCanvasWall() {
  if (ball.x <= ball.radius ) {
    ball.x = ball.radius;
    ball.dx = -ball.dx;
  } else if (ball.x >= canvas.width - ball.radius) {
    ball.x = canvas.width - ball.radius;
    ball.dx = -ball.dx;
  } else if (ball.y <= ball.radius) {
    ball.y = ball.radius;
    ball.dy = -ball.dy;
  } else if (ball.y >= canvas.height - ball.radius) {
    ball.y = canvas.height - ball.radius;
    ball.dy = -ball.dy;
  }
}

function hitBlock() {
    for (i=0; i<blocks.length; i+=1) {
      if ( (ball.x <= blocks[i].x + blocks[i].width) && (ball.x >= blocks[i].x)
            && (ball.y >= blocks[i].y) && (ball.y <= blocks[i].y + blocks[i].height) ) {
          if ( (ball.x >= blocks[i].x + blocks[i].width - ball.radius) ||
            (ball.x <= blocks[i].x + ball.radius) ) {
            ball.dx = -ball.dx;
            blocks.splice([i],1);
          } else {
            ball.dy = -ball.dy;
            blocks.splice([i],1);
          }
      }
    }
}

function stopBall() {
    clearInterval(t);
    timer_is_on1 = 0;
}

function startBall() {
  if (!timer_is_on1) {
      timer_is_on1 = 1;
      t = setInterval(draw,35);
  }
}

document.getElementById('stopBall').addEventListener('click', stopBall);
document.getElementById('startBall').addEventListener('click', startBall);

draw();

})();
