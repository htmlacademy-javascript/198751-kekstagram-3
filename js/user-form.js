/* global Pristine:readonly */
export function initValidateForm() {
  const loadImgForm = document.querySelector('.setup-wizard-form');

  const pristine = new Pristine(loadImgForm, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper--error',
  });

  function validateHashtags(value) {
    const arrayValues = value.split(/\s+/);
    const hashtag = /^#[a-zа-яё\d]{1,19}$/i;

    for (let i = 0; i < arrayValues.length; i++) {
      if (arrayValues[i] === '') {
        break;
      }

      const isValid = hashtag.test(arrayValues[i]);

      if (!isValid) {
        return false;
      }
    }

    return true;
  }

  pristine.addValidator(
    loadImgForm.querySelector('.text__hashtags'),
    validateHashtags,
    'Ошибка'
  );

  function handleForm(evt) {
    evt.preventDefault();
    pristine.validate();
  }

  loadImgForm.addEventListener('submit', handleForm);

  return () => {
    loadImgForm.removeEventListener('submit', handleForm);
    pristine.destroy();
  };
};
