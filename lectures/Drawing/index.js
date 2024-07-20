const context = myCanvas.getContext("2d");
let radius = 50;
myCanvas.addEventListener("wheel", (e) => {
  radius -= Math.sign(e.deltaY) * 10;
  radius = Math.max(10, radius);
  showIntent(e.clientX, e.clientY, radius);
});
myCanvas.addEventListener("pointerdown", (e) => {
  context.fillStyle = "#05F";
  if (e.button == 0) {
    context.globalCompositeOperation = "source-over";
  } else {
    context.globalCompositeOperation = "destination-out";
  }
  context.beginPath();
  context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI * 2);
  context.fill();
});

myCanvas.addEventListener("pointermove", (e) => {
  showIntent(e.clientX, e.clientY, radius);
});

myCanvas.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

function showIntent(x, y, radius) {
  circle.style.left = x - radius + "px";
  circle.style.top = y - radius + "px";
  circle.style.width = radius * 2 + "px";
  circle.style.height = radius * 2 + "px";
}
