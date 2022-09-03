const button = document.querySelector("#colorChange");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
  const newnewColor = makeRandomColor();
  const textRandom = makeRandomColor();
  document.body.style.backgroundColor = newnewColor;
  h1.innerText = newnewColor;
  h1.style.color = textRandom;
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  return `rgb(${r},${g}, ${b})`;
};
