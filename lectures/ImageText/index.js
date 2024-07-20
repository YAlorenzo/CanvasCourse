const context = myCanvas.getContext("2d");
const image = new Image();
image.src = "./img/img.png";

const maxY = 50;
const rangeY = 50;
let p = 0;

animate();

function animate() {
  p = p + 0.001;
  if (p > 1) {
    p = 0;
  }
  const y = maxY - Math.abs(Math.sin(p * Math.PI)) * rangeY;

  context.clearRect(0, 0, myCanvas.width, myCanvas.height);

  context.drawImage(image, 100, y, 200, 200);

  context.font = "30px Arial";
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.fillStyle = "#b2ffff";

  context.fillText("Canvas Image", 200, 300);
  requestAnimationFrame(animate);
}
