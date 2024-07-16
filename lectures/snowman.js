function drawSnowman(x1, y1, r1, scaleFactor) {
  // bottom ball
  context.beginPath();
  context.arc(x1, y1, r1, 0, Math.PI * 2);
  context.fillStyle = "white";
  context.fill();

  //middle ball
  context.beginPath();
  const r2 = r1 * scaleFactor,
    x2 = x1,
    y2 = y1 - r1 - r2;
  context.arc(x2, y2, r2, 0, Math.PI * 2);
  context.fill();

  //top ball
  context.beginPath();
  const r3 = r2 * scaleFactor,
    x3 = x2,
    y3 = y2 - r2 - r3;
  context.arc(x3, y3, r3, 0, Math.PI * 2);
  context.fill();

  drawHat(x3, y3, r3);
}

function drawHat(headX, headY, headRad) {
  context.beginPath();
  const w4 = headRad * 2,
    h4 = headRad / 2,
    x4 = headX - w4 / 2,
    y4 = headY - headRad;
  context.rect(x4, y4, w4, h4);
  context.stroke();
  context.fillStyle = "black";
  context.fill();

  context.beginPath();
  const w5 = w4 * 0.8,
    h5 = headRad,
    x5 = headX - w5 / 2,
    y5 = y4 - h5;
  context.rect(x5, y5, w5, h5);
  context.stroke();
  context.fill();
}
