const inputRef = document.querySelector('#validation-input');
const validationLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', event => {
  const currentLength = event.currentTarget.value.length;
  const currentClassList = event.currentTarget.classList;
  const containsValid = currentClassList.contains('valid');
  const containsInvalid = currentClassList.contains('invalid');

  if (currentLength === validationLength) {
    if (containsInvalid) currentClassList.remove('invalid');
    if (!containsValid) currentClassList.add('valid');
  } else {
    if (containsValid) currentClassList.remove('valid');
    if (!containsInvalid) currentClassList.add('invalid');
  }
});
