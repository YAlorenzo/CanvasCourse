const el = document.getElementById("myCanvas");
const context = el.getContext("2d");

const width = 400,
  height = 400;
const spacing = 80;

drawGridOfsnowmen(spacing, width, height);

function drawGridOfsnowmen(spacing, width, height) {
  let x = spacing;

  while (x < width) {
    let y = spacing;
    while (y < height) {
      const scaleFactor = Math.random() + 0.5;
      drawSnowman(x, y, 10, scaleFactor);
      y = y + spacing;
    }
    x = x + spacing;
  }
}
// обновление страницы
const button = document.getElementById("button");
button.addEventListener("click", function (event) {
  window.location.reload();
});
