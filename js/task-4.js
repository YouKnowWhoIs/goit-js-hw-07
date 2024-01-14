const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  console.log(`Login:${password}  , Password:${email} `);
  form.reset();
}

//style

loginForm.style.display = `flex`;
loginForm.style.flexDirection = `column`;
loginForm.style.gap = `8px`;

const textLable = document.querySelectorAll(".login-form label");
textLable.forEach((textLables) => {
  textLables.style.display = `flex`;
  textLables.style.flexDirection = `column`;
  textLables.style.gap = `8px`;
});

const inputElement = document.querySelectorAll("input");
inputElement.forEach((inputElements) => {
  inputElements.style.border = `1px solid #808080`;
  inputElements.style.width = `360px`;
  inputElements.style.height = `40px`;
  inputElements.style.borderRadius = `4px`;
  inputElements.style.paddingLeft = `16px`;
});

const button = document.querySelector("button");
button.style.marginTop = `8px`;
button.style.background = `#4e75ff`;
button.style.color = `#fff`;
button.style.fontWeight = `500`;
button.style.width = `86px`;
button.style.padding = `8px 16px`;
button.style.border = `none`;
button.style.borderRadius = `8px`;
button.addEventListener("mouseenter", () => {
  button.style.backgroundColor = "#6C8CFF";
});
button.addEventListener("mouseleave", () => {
  button.style.backgroundColor = "#4e75ff";
});
