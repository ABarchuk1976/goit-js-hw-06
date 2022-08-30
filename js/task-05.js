let inputedName = 'Anonymous';
const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  const currentValue = event.currentTarget.value;
  spanRef.textContent = currentValue === '' ? 'Anonymous' : currentValue;
});
