(function() {

let canvas10 = document.getElementById("myCanvas3");
let ctx10 = canvas10.getContext('2d');

function makeCircle3(x,y) {
  ctx10.beginPath();
  ctx10.arc(x, y, 6, 0, Math.PI*2, true);
  ctx10.closePath();
  ctx10.fillStyle = "blue";
  ctx10.fill();
}

function makeLine3(a,b,c,d) {

  let ranColor1 = Math.floor((Math.random() * 155) + 100);
  let ranColor2 = Math.floor((Math.random() * 255) + 1);
  let ranColor3 = Math.floor((Math.random() * 255) + 1);

  let lineColor = 'rgb('+ranColor1+','+ranColor2+','+ranColor3+')';

  ctx10.beginPath();
  ctx10.moveTo(a,b);
  ctx10.lineTo(c,d);
  ctx10.strokeStyle = lineColor;
  ctx10.lineWidth = "6";
  ctx10.stroke();
}

function draw3() {

  for(let i=0; i<20; i++) {
    let randomX1 = Math.random() * 960;
    let randomX2 = Math.random() * 960;
    let randomY1 = Math.random() * 500;
    let randomY2 = Math.random() * 500;

    makeCircle3(randomX1, randomY1);
    makeCircle3(randomX2, randomY2);
    makeLine3(randomX1,randomY1,randomX2,randomY2);
  }
}

function redraw() {
  ctx10.clearRect(0,0,canvas10.width,canvas10.height);
  draw3();
}

document.getElementById('redraw').addEventListener('click', redraw);

draw3();

})();
