const sounds = [
  new Audio("./sounds/do.mp3"),
  new Audio("./sounds/re.mp3"),
  new Audio("./sounds/mi.mp3"),
  new Audio("./sounds/fa.mp3"),
  new Audio("./sounds/sol.mp3"),
  new Audio("./sounds/lya.mp3"),
  new Audio("./sounds/si.mp3"),
];
const keyMap = {
  s1: 0,
  s2: 1,
  s3: 2,
  s4: 3,
  s5: 4,
  s6: 5,
  s7: 6,
  Digit1: 0,
  Digit2: 1,
  Digit3: 2,
  Digit4: 3,
  Digit5: 4,
  Digit6: 5,
  Digit7: 6,
};

function playSound(index) {
  const sound = sounds[index];
  sound.currentTime = 0;
  sound.play();
}

document.querySelectorAll(".note").forEach((note) => {
  note.addEventListener("click", () => {
    const soundIndex = keyMap[note.id];
    if (soundIndex !== undefined) {
      playSound(soundIndex);
    }
  });
});

document.addEventListener("keydown", (info) => {
  const soundIndex = keyMap[event.code];
  if (soundIndex !== undefined) {
    playSound(soundIndex);
  }
});
