const grid = document.querySelector(".grid");

const exersiceList = [
  {
    id: "1",
    tittle: "Bird House",
    description: "Drawing shapes using JavaScript",
    path: "./lectures/lecture1.html",
  },
  {
    id: "2",
    tittle: "Square",
    description: "Good coding practices in JavaScript",
    path: "./lectures/lecture2.html",
  },
  {
    id: "3",
    tittle: "Draw Snowman",
    description: "JavaScript beginner project",
    path: "./lectures/lecture3.html",
  },
  {
    id: "4",
    tittle: "Animation",
    description: "JavaScript Animation Basics",
    path: "./lectures/lecture4.html",
  },
  {
    id: "5",
    tittle: "Interaction",
    description: "HTML Canvas Mouse Interaction",
    path: "./lectures/lecture5.html",
  },
  {
    id: "6",
    tittle: "Image",
    description: "Text and Images on HTML Canvas",
    path: "./lectures/lecture6.html",
  },
  {
    id: "7",
    tittle: "Piano",
    description: "Keyboard input and Audio playback",
    path: "./lectures/lecture7.html",
  },
  {
    id: "8",
    tittle: "SnowMan",
    description: "mouse movement effect",
    path: "./lectures/lecture8.html",
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
