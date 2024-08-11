const context = myCanvas.getContext("2d");

drawCube(myCanvas.width / 2, myCanvas.height / 2, 100);

function drawCube(centerX, centerY, size) {
  context.beginPath();
  const radius = size / 2;
  for (let i = 0; i <= 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    if (i === 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }

    if (i == 2 || i == 4 || i == 6) {
      context.stroke();
      context.lineTo(centerX, centerY);
      context.fillStyle = ["#888",  "#444", "#AAA"][i / 2 - 1];
      context.fill();
      context.beginPath();
      context.moveTo(x, y);
    }
  }
  context.stroke();
}
