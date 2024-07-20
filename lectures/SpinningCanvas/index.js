const context = myCanvas.getContext("2d");
let drawing = false;
let rotationAngle = 0;
let rotationSpeed = 0;
let eventInfo = null;

myCanvas.addEventListener("pointerdown", (e) => {
  context.beginPath();
  context.moveTo(e.offsetX, e.offsetY);
  drawing = true;
});

myCanvas.addEventListener("pointermove", (e) => {
  eventInfo = e;
});

myCanvas.addEventListener("pointerleave", () => {
  drawing = false;
});
myCanvas.addEventListener("pointerup", () => {
  drawing = false;
});

animate();

function animate() {
  rotationAngle += rotationSpeed;
  myCanvas.style.transform =
    "translate(-50%, -50%) rotate(" + rotationAngle + "deg)";

  if (drawing == true && eventInfo) {
    const xyRelToCenterPage = {
      x: eventInfo.pageX - window.innerWidth / 2,
      y: eventInfo.pageY - window.innerHeight / 2,
    };
    const pol = toPolar(xyRelToCenterPage);
    pol.dir -= rotationAngle * (Math.PI / 180);
    const xyWithRotation = toXY(pol);
    xyWithRotation.x += myCanvas.width / 2;
    xyWithRotation.y += myCanvas.height / 2;
      context.lineTo(xyWithRotation.x, xyWithRotation.y);
      context.strokeStyle = "#da0000";
      
    context.stroke();
    context.beginPath();
    context.moveTo(xyWithRotation.x, xyWithRotation.y);
  }
  requestAnimationFrame(animate);
}

function toPolar({ x, y }) {
  return {
    dir: Math.atan2(y, x),
    mag: Math.hypot(x, y),
  };
}
function toXY({ mag, dir }) {
  return {
    x: Math.cos(dir) * mag,
    y: Math.sin(dir) * mag,
  };
}
function updateRotationSpeed() {
  rotationSpeed = parseFloat(document.getElementById("speedSlider").value);
}
