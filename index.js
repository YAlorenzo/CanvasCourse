const grid = document.querySelector(".grid");

const exersiceList = [
  {
    id: "1",
    tittle: "Bird House",
    description: "Drawing shapes using JavaScript",
    path: "./lectures/BirdHouse/index.html",
  },
  {
    id: "2",
    tittle: "Square",
    description: "Good coding practices in JavaScript",
    path: "./lectures/Square/index.html",
  },
  {
    id: "3",
    tittle: "Draw Snowman",
    description: "JavaScript beginner project",
    path: "./lectures/DrawSnowman/index.html",
  },
  {
    id: "4",
    tittle: "Animation",
    description: "JavaScript Animation Basics",
    path: "./lectures/Animation/index.html",
  },
  {
    id: "5",
    tittle: "Interaction",
    description: "HTML Canvas Mouse Interaction",
    path: "./lectures/Interaction/index.html",
  },
  {
    id: "6",
    tittle: "Image",
    description: "Text and Images on HTML Canvas",
    path: "./lectures/ImageText/index.html",
  },
  {
    id: "7",
    tittle: "Piano",
    description: "Keyboard input and Audio playback",
    path: "./lectures/Piano/index.html",
  },
  {
    id: "8",
    tittle: "SnowMan",
    description: "mouse movement effect",
    path: "./lectures/SnowMan/index.html",
  },
  {
    id: "9",
    tittle: "Illusion",
    description: "Creating Mind-Bending Optical Illusions with JavaScript",
    path: "./lectures/Illusion/index.html",
  },
  {
    id: "10",
    tittle: "YinYang",
    description: "Drawing the YinYang with JavaScript",
    path: "./lectures/YinYang/index.html",
  },
  {
    id: "11",
    tittle: "Ebbinghaus",
    description: "The Ebbinghaus Illusion with JavaScript",
    path: "./lectures/Ebbinghaus/index.html",
  },
  {
    id: "12",
    tittle: "Drawing",
    description: "Drawing in circles with JavaScript",
    path: "./lectures/Drawing/index.html",
  },
  {
    id: "13",
    tittle: "Spinning Canvas",
    description: "Coding a Spinning Canvas App with JavaScript",
    path: "./lectures/SpinningCanvas/index.html",
  },
  {
    id: "14",
    tittle: "Impossible Trian",
    description: "The Penrose triangle, is a triangular impossible object",
    path: "./lectures/InpossibleTriangle/index.html",
  },
];

function renderGridItem() {
  const item = exersiceList
    .map(
      (elem) => `
    <a href=${elem.path} class="card" id=${elem.id}>
          <h2>
            ${elem.tittle} <span> -&gt;</span>
          </h2>
          <p>${elem.description}</p>
        </a>
    `
    )
    .join("");

  grid.insertAdjacentHTML("beforeend", item);
}

renderGridItem();
