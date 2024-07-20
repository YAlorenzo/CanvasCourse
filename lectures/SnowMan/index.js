const context = myCanvas.getContext("2d");
const buttonPlay = document.querySelector(".button");
const minX = 170;
const rangeX = 60;
let p = 0;

const bow = new Image();
bow.src = "./img/bow.png";

const song = new Audio("./sounds/jingleBells.mp3");

document.addEventListener("keydown", function (info) {
  if (info.code === "Space") {
    song.play();
  }
  buttonPlay.addEventListener("click", () => {
    song.play();
  });
});

myCanvas.addEventListener("mousemove", function (info) {
  p = info.offsetX / myCanvas.width;
});

animate();

function animate() {
  context.clearRect(0, 0, myCanvas.width, myCanvas.height);
  drawSnowman(200, 640, 160, 0.7);
  // drawing the dynamic eyes
  const x = minX + rangeX * p;
  context.beginPath();
  context.arc(x - 25, 170, 15, 0, Math.PI * 2);
  context.arc(x + 25, 170, 15, 0, Math.PI * 2);
  context.fill();

  context.drawImage(bow, 150, 225, 100, 60);

  context.font = "40px Comic Sans MS";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("Merry", 200, 310);
  context.fillText("Cristmas", 200, 360);
  requestAnimationFrame(animate);
}
