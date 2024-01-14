const ulElement = document.querySelector("#categories");
const liElements = document.querySelectorAll(".item");

console.log(`Number of categories: ${liElements.length}`);

liElements.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
