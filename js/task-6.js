function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const inputElement = document.querySelector("#controls input");
const boxConteiner = document.querySelector("#boxes");

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = parseInt(inputElement.value);

  if (isValidInput(amount)) {
    const boxes = [];
    let boxSize = 30;

    for (let a = 0; a < amount; a++) {
      const box = document.createElement("div");
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
      boxSize += 10;
    }

    boxConteiner.append(...boxes);
    inputElement.value = "";
  } else {
    console.log("Chose a number!");
  }
}

function destroyBoxes() {
  boxConteiner.innerHTML = "";
}

function isValidInput(value) {
  return Number.isInteger(value) && value > 0 && value < 101;
}
