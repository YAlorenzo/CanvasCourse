const sounds = [
  new Audio("./sounds/do.mp3"),
  new Audio("./sounds/re.mp3"),
  new Audio("./sounds/mi.mp3"),
  new Audio("./sounds/fa.mp3"),
  new Audio("./sounds/sol.mp3"),
  new Audio("./sounds/lya.mp3"),
  new Audio("./sounds/si.mp3"),
  new Audio("./sounds/do2.mp3"),
];

const keyMap = {
  s1: 0,
  s2: 1,
  s3: 2,
  s4: 3,
  s5: 4,
  s6: 5,
  s7: 6,
  s8: 7,
  Digit1: 0,
  Digit2: 1,
  Digit3: 2,
  Digit4: 3,
  Digit5: 4,
  Digit6: 5,
  Digit7: 6,
  Digit8: 7,
  Numpad1: 0,
  Numpad2: 1,
  Numpad3: 2,
  Numpad4: 3,
  Numpad5: 4,
  Numpad6: 5,
  Numpad7: 6,
  Numpad8: 7,
};

const notelist = document.querySelectorAll(".note");

function playSound(index) {
  const sound = sounds[index];
  sound.currentTime = 0;
  sound.play();
}

notelist.forEach((note) => {
  note.addEventListener("mousedown", () => {
    const soundIndex = keyMap[note.id];
    if (soundIndex !== undefined) {
      playSound(soundIndex);
      notelist[soundIndex].style.opacity = 0.6;
    }
  });

  note.addEventListener("mouseup", () => {
    const soundIndex = keyMap[note.id];
    if (soundIndex !== undefined) {
      notelist[soundIndex].style.opacity = 1;
    }
  });
});

document.addEventListener("keydown", (event) => {
  const soundIndex = keyMap[event.code];
  if (soundIndex !== undefined) {
    notelist[soundIndex].style.opacity = 0.6;
    playSound(soundIndex);
  }
});

document.addEventListener("keyup", function (event) {
  const soundIndex = keyMap[event.code];
  if (soundIndex !== undefined) {
    notelist[soundIndex].style.opacity = 1;
  }
});
