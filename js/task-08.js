const formRef = document.querySelector('.login-form');

const doneSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    alert('Будь ласка заповніть усі поля форми!');
  }

  console.log(`Електронна пошта: ${email.value}, Пароль: ${password.value}`);
  event.currentTarget.reset();
};

formRef.addEventListener('submit', doneSubmit);
