function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const inputElement = document.querySelector("input");
const boxContainer = document.querySelector("#boxes");

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  destroyBoxes();
  const amount = parseInt(inputElement.value, 10);

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

    boxContainer.append(...boxes);
    inputElement.value = "";
  } else {
    console.log("Chose a number!");
  }
}

function destroyBoxes() {
  boxContainer.innerHTML = "";
}

function isValidInput(value) {
  return Number.isInteger(value) && value > 0 && value < 101;
}

//style

inputElement.style.border = ` 1px solid #808080`;
inputElement.style.borderRadius = `8px`;
inputElement.style.padding = `8px`;
inputElement.style.width = `150px`;
inputElement.style.textAlign = `center`;

create.style.letterSpacing = `0.64px`;
create.style.background = `#4e75ff`;
create.style.color = `#fff`;
create.style.fontWeight = `500`;
create.style.padding = `8px 16px`;
create.style.border = `none`;
create.style.borderRadius = `8px`;
create.addEventListener("mouseenter", () => {
  create.style.backgroundColor = "#6C8CFF";
});
create.addEventListener("mouseleave", () => {
  create.style.backgroundColor = "#4e75ff";
});

destroy.style.letterSpacing = `0.64px`;
destroy.style.background = `#ff4e4e`;
destroy.style.color = `#fff`;
destroy.style.fontWeight = `500`;
destroy.style.padding = `8px 16px`;
destroy.style.border = `none`;
destroy.style.borderRadius = `8px`;
destroy.addEventListener("mouseenter", () => {
  destroy.style.backgroundColor = "#FF7070";
});
destroy.addEventListener("mouseleave", () => {
  destroy.style.backgroundColor = "#ff4e4e";
});

const item = document.querySelector("#controls");
item.style.backgroundColor = `#F6F6FE`;
item.style.padding = `32px 0px 32px 32px`;
item.style.display = `flex`;
item.style.width = `410px`;
item.style.flexDirection = `row`;
item.style.gap = `16px`;
item.style.marginBottom = `16px`;

boxContainer.style.backgroundColor = `#F6F6FE`;
boxContainer.style.padding = `32px`;
boxContainer.style.display = `flex`;
boxContainer.style.flexDirection = `column`;
boxContainer.style.gap = `16px`;
