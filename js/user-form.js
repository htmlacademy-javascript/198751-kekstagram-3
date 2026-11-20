/* global Pristine:readonly */
const loadImgForm = document.querySelector('.setup-wizard-form');

const pristine = new Pristine(loadImgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

function validateHashtags(value) {
  const arrayValues = value.split(/\s+/);
  const hashtag = /^#[a-zа-яё\d]{1,19}$/i;

  arrayValues.forEach(currentValue => {
    currentValue = currentValue.trim();
    hashtag.test(currentValue);
  });
}

pristine.addValidator(
  loadImgForm.querySelector('.text__hashtags'),
  validateHashtags,
  'Ошибка'
);

loadImgForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
