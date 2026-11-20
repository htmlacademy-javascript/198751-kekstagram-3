/* global Pristine:readonly */
const wizardForm = document.querySelector('.setup-wizard-form');

const pristine = new Pristine(wizardForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'setup-wizard-form__element',
  errorTextClass: 'setup-wizard-form__error-text',
});

wizardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  console.log(isValid ? 'Можно отправлять' : 'Форма невалидна');
});
