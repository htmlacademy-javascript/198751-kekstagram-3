export function initValidateForm() {
  const loadImgForm = document.querySelector('.setup-wizard-form');
  let textErrorHashtag = '';

  const pristine = new Pristine(loadImgForm, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper--error',
  });

  const validateHashtags = (value) => {
    const hashtag = /^#[a-zа-яё\d]{1,19}$/i;
    const arrayValues = value.split(/\s+/);

    const clearArrayValues = arrayValues.filter((val) => val !== '');
    /*
    Вопрос наставнику:
    Или эту строку убрать и использовать trim перед преобразованием value в массив?
    */
    /*
    Ответ ИИ:
    «И по вашему вопросу в комментарии на js/user-form.js:17: filter от пустых строк и trim — не альтернативы. trim убирает пробелы только по краям, а внутри строки двойные пробелы останутся и дадут пустые элементы после split. Так что filter (или split с последующей очисткой) нужен в любом случае; trim можно добавить дополнительно, чтобы value из одних пробелов давал пустой массив.»
    В данном случае я склоняюсь верить, так как воспроизводится верно. Но есть сомнения, так как ответ другого ИИ сказал переберать массив. (не сохранил ответ :( )
    */

    if (clearArrayValues.length > 5) {
      textErrorHashtag = 'Превышено количество хэштегов.';
      return false;
    }

    const seen = new Set();

    for (let i = 0; i < clearArrayValues.length; i++) {
      const isValid = hashtag.test(clearArrayValues[i]);

      if (!isValid) {
        textErrorHashtag = 'Введён невалидный хэштег.';
        return false;
      }

      const loverCase = clearArrayValues[i].toLowerCase();

      if (seen.has(loverCase)) {
        textErrorHashtag = 'Хэштеги повторяются.';
        return false;
      }

      seen.add(loverCase);
    }

    return true;
  };

  pristine.addValidator(
    loadImgForm.querySelector('.text__hashtags'),
    validateHashtags,
    () => textErrorHashtag
  );

  function validateDescription(value) {
    return value.length <= 140;
  }

  pristine.addValidator(
    loadImgForm.querySelector('.text__description'),
    validateDescription,
    'Длина комментария больше 140 символов.'
  );

  function handleForm(evt) {
    evt.preventDefault();
    const isValidForm = pristine.validate();

    // eslint-disable-next-line no-console
    console.log(isValidForm ? 'Отправляем' : 'Не отправляем');

  }

  loadImgForm.addEventListener('submit', handleForm);

  return pristine;
}
