const context = myCanvas.getContext("2d");

const minRad = 10;
const rangeRad = 20;
let p = 0;

let x = 200;
let y = 200;

animate();

function animate() {
  p = p + 0.005;
  if (p > 1) {
    p = 0;
  }

  const rad = minRad + rangeRad * p;

  context.clearRect(0, 0, myCanvas.width, myCanvas.height);
  context.beginPath();
  context.arc(x, y, rad, 0, Math.PI * 2);
  context.strokeStyle = "#da0000";

  context.stroke();

  requestAnimationFrame(animate);
}

//   движение мыши
myCanvas.addEventListener("mousemove", function (info) {
  x = info.offsetX;
  y = info.offsetY;
});
