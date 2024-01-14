const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});

// style

textInput.style.width = `360px`;
textInput.style.height = `40px`;
textInput.style.borderRadius = `4px`;
textInput.style.border = `1px solid #808080`;
textInput.style.padding = `8px 0 8px 16px`;
textInput.style.paddindLeft = `16px`;
textInput.style.fontSize = `16px`;
textInput.style.litterSpacing = `0.64`;

const hText = document.querySelector("h1");
hText.style.fontSize = `24px`;
hText.style.fontWeight = `32px`;
hText.style.litterSpacing = `0.96`;
