let inputedName = 'Anonymous';
const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  inputedName = event.currentTarget.value;
  spanRef.textContent = inputedName === '' ? 'Anonymous' : inputedName;
});
