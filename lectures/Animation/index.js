const context = myCanvas.getContext("2d");

const minX = 100;
const rangeX = 200;
const minRad = 10;
const rangeRad = 20;
let p = 0;
let sing = 1;

animate();

function animate() {
  const x = minX + rangeX * p * p;
  const rad = minRad + rangeRad * p;
  p = p + 0.02 * sing;
  if (p > 1) {
    sing = -1;
  }
  if (p < 0) {
    sing = 1;
  }
  context.clearRect(0, 0, myCanvas.width, myCanvas.height);

  context.beginPath();
  context.arc(x, 200, 20, 0, Math.PI * 2);
  context.fillStyle = "red";
  context.fill();

  requestAnimationFrame(animate);
}
