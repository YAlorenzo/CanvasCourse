const el = document.getElementById("myCanvas");
const context = el.getContext("2d");
const thickness = 5;
let x = 0,
  y = 0,
  w = 400,
  h = 400;

let i = 1;

while (i <= 40) {
  context.beginPath();
  context.rect(x, y, w, h);
  if (i % 2 == 1) {
    context.fillStyle = "#da0000";
  } else {
    context.fillStyle = "#2e2e2d";
  }
  context.fill();
  x = x + thickness;
  y = y + thickness;
  w = w - thickness - thickness;
  h = h - thickness - thickness;
  i = i + 1;
}
