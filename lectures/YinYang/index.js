const context = myCanvas.getContext("2d");

drawYinYang(myCanvas.width / 2, myCanvas.height / 2, 100);

function drawYinYang(centerX, centerY, radius) {
  const left = centerX - radius;
  const top_ = centerY - radius;
  context.save();

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  context.clip();
  context.fillStyle = "white";
  context.fillRect(left, top_, radius, radius * 2);
  context.fillStyle = "black";
  context.fillRect(centerX, top_, radius, radius * 2);

  context.beginPath();
  context.arc(centerX, centerY - radius / 2, radius / 2, 0, Math.PI * 2);
  context.fillStyle = "white";
  context.fill();

  context.beginPath();
  context.arc(centerX, centerY - radius / 2, radius / 6, 0, Math.PI * 2);
  context.fillStyle = "black";

  context.fill();

  context.beginPath();
  context.arc(centerX, centerY + radius / 2, radius / 2, 0, Math.PI * 2);
  context.fillStyle = "black";
  context.fill();

  context.beginPath();
  context.arc(centerX, centerY + radius / 2, radius / 6, 0, Math.PI * 2);
  context.fillStyle = "white";

  context.fill();

  context.restore();
}
