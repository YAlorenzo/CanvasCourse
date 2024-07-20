const context = myCanvas.getContext("2d");
context.fillStyle = "white";
context.strokeStyle = "gray";
context.lineWidth = 2;

function drawSquare(x, y, size) {
  context.beginPath();
  context.rect(x, y, size, size);
  context.fill();
  context.stroke();
}
const size = 50;
let offset = 0;
for (let y = 0; y <= myCanvas.height; y += size) {
  for (let x = 0; x <= myCanvas.width; x += size) {
    if ((x / size) % 2 == 0) {
      context.fillStyle = "black";
    } else {
      context.fillStyle = "white";
    }
    drawSquare(x - offset, y, size);
  }
  offset = size / 2 - offset;
}
