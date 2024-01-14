const ulElement = document.querySelector("#categories");
const liElements = document.querySelectorAll(".item");

console.log(`Number of categories: ${liElements.length}`);

liElements.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});

// style

const ulConteiner = document.querySelectorAll("#categories");
ulConteiner.forEach((ulConteiners) => {
  ulConteiners.style.display = `flex`;
  ulConteiners.style.flexDirection = `column`;
  ulConteiners.style.gap = `24px`;
});

const hConteiner = document.querySelectorAll("#categories h2");
hConteiner.forEach((hConteiners) => {
  hConteiners.style.color = `#2E2F42`;
  hConteiners.style.fontSize = `24px`;
  hConteiners.style.fontWeight = `600`;
  hConteiners.style.lineHeight = `1.33`;
  hConteiners.style.letterSpacing = `0.96px`;
  hConteiners.style.paddingLeft = `16px`;
});

const liConteiner = document.querySelectorAll(".item");
liConteiner.forEach((liConteiners) => {
  liConteiners.style.backgroundColor = `#F6F6FE`;
  liConteiners.style.width = `392px`;
  liConteiners.style.color = `#2E2F42`;
  liConteiners.style.listStyleType = `none`;
});

const ulConteinerList = document.querySelectorAll(".item ul");
ulConteinerList.forEach((ulConteinerLists) => {
  ulConteinerLists.style.display = `flex`;
  ulConteinerLists.style.flexWrap = `wrap`;
  ulConteinerLists.style.gap = `8px`;
  ulConteinerLists.style.paddingLeft = `16px`;
  ulConteinerLists.style.paddingBottom = `16px`;
});

const liConteinerList = document.querySelectorAll(".item li");
liConteinerList.forEach((liConteinerLists) => {
  liConteinerLists.style.listStyleType = `none`;
  liConteinerLists.style.paddingTop = `8px`;
  liConteinerLists.style.paddingBottom = `8px`;
  liConteinerLists.style.paddingLeft = `16px`;
  liConteinerLists.style.borderRadius = `4px`;
  liConteinerLists.style.border = `1px solid #808080`;
  liConteinerLists.style.width = `360px`;
  liConteinerLists.style.height = `40px`;
});
