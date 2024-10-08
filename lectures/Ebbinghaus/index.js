const ctx = myCanvas.getContext("2d");

animate();

function animate() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  const t = Math.sin(new Date().getTime() / 1000) ** 2;
  drawFlower({
    centerX: myCanvas.width / 2,
    centerY: myCanvas.height / 2,
    innerRad: 25,
    outRad: lerp(100, 50, t),
    petalRad: lerp(45, 15, t),
    petalCount: 6,
  });

  requestAnimationFrame(animate);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

// const centerX = myCanvas.width / 2;
// const centerY = myCanvas.height / 2;
// const innerRad = 50; //радиус внутрений
// const outRad = 200; // радиус внешний
// const petalRad = 50; // радиус лепестка
// const petalCount = 6;

function drawFlower({
  centerX,
  centerY,
  innerRad,
  outRad,
  petalRad,
  petalCount,
}) {
  //внутрений круг
  ctx.beginPath();
  ctx.fillStyle = "orange";
  ctx.arc(centerX, centerY, innerRad, 0, 2 * Math.PI);
  ctx.fill();

  // внешний круг
  ctx.beginPath();
  ctx.arc(centerX, centerY, outRad, 0, 2 * Math.PI);
  ctx.lineWidth = petalRad * 2;
  ctx.lineCap = "round";
  const spacing = (2 * Math.PI * outRad) / petalCount;
  ctx.setLineDash([0, spacing]);
  ctx.stroke();
}
