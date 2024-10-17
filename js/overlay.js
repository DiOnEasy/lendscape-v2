// Открытие overlay по клику на кнопку
document.querySelectorAll('.pools__item-link').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Чтобы предотвратить переход по ссылке

    // Открываем overlay
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('none'); // Убираем класс 'none', чтобы показать overlay

    // Добавляем класс 'hidden' к body, чтобы заблокировать прокрутку страницы
    document.body.classList.add('hidden');

    // Проверка поля email при открытии формы
    checkEmailValidity();
  });
});

// Закрытие overlay по клику на сам overlay (вне формы)
document.querySelector('.overlay').addEventListener('click', function(event) {
  const formWrapper = document.querySelector('.form-wrapper');

  // Проверяем, что клик был именно по overlay, а не по форме или её элементам
  if (!formWrapper.contains(event.target)) {
    closeOverlay();
  }
});

// Закрытие overlay по клику на кнопку Cancel
document.querySelector('.form__button_cancel').addEventListener('click', function(event) {
  event.preventDefault();
  closeOverlay();
});

// Функция для закрытия overlay и разблокировки body
function closeOverlay() {
  const overlay = document.querySelector('.overlay');
  overlay.classList.add('none'); // Скрываем overlay
  document.body.classList.remove('hidden'); // Убираем блокировку прокрутки

  // Сброс значений формы
  const form = document.querySelector('.form');
  form.reset();

  // Деактивируем кнопку confirm
  confirmButton.disabled = true;
}

// Проверка поля email для активации/деактивации кнопки Confirm
const emailInput = document.getElementById('email');
const confirmButton = document.querySelector('.form__button_confirm');

emailInput.addEventListener('input', checkEmailValidity);

// Функция для проверки валидности email
function checkEmailValidity() {
  const emailValue = emailInput.value;

  // Регулярное выражение для валидации email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailValue)) {
    confirmButton.disabled = false; // Активируем кнопку, если email валиден
  } else {
    confirmButton.disabled = true; // Деактивируем кнопку, если email невалиден или пуст
  }
}
