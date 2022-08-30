function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.body;
const spanRef = document.querySelector('.color');
const btnRef = document.querySelector('.change-color');
let color = '#fff';

btnRef.addEventListener('click', event => {
  color = getRandomHexColor();
  spanRef.textContent = color;
  bodyRef.style.backgroundColor = color;
});
