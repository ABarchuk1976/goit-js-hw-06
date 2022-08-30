let counterValue = 0;
const incBtnRef = document.querySelector('[data-action = "increment"]');
const decBtnRef = document.querySelector('[data-action = "decrement"]');
const spanRef = document.querySelector('#value');

incBtnRef.addEventListener('click', () => {
  counterValue += Number(incBtnRef.textContent);
  spanRef.textContent = String(counterValue);
});

decBtnRef.addEventListener('click', () => {
  counterValue += Number(decBtnRef.textContent);
  spanRef.textContent = String(counterValue);
});
