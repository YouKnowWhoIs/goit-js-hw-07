function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const nameColor = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  button.style.backgroundColor = randomColor;
  nameColor.textContent = randomColor;
});

//style

button.style.letterSpacing = `0.64px`;
button.style.background = `#4e75ff`;
button.style.color = `#fff`;
button.style.fontWeight = `500`;
button.style.padding = `8px 16px`;
button.style.border = `none`;
button.style.borderRadius = `8px`;
