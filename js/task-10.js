function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.querySelector('#controls');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

for (const tag of controlsRef.children) {
  if (tag.tagName !== 'INPUT') continue;
  tag.value = '1';
  break;
}

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = String(30 + 10 * i) + 'px';
    box.style.height = String(30 + 10 * i) + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesRef.append(...boxes);
}

function destroyBoxes() {
  const boxes = [...boxesRef.children];
  for (const box of boxes) box.remove();
}

btnCreateRef.addEventListener('click', () => {
  let amount = 0;

  for (const tag of controlsRef.children) {
    if (tag.tagName !== 'INPUT') continue;
    amount = Number(tag.value);
    break;
  }

  // console.log(amount);
  createBoxes(amount);
});

btnDestroyRef.addEventListener('click', () => {
  destroyBoxes();
});
