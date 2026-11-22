import { toggleModal } from './util.js';
import { initValidateForm } from './user-form.js';

export function uploadPicture() {
  const overlay = document.querySelector('.img-upload__overlay');
  const imgUploadInput = document.querySelector('.img-upload__input');
  const imgUploadCancel = document.querySelector('.img-upload__cancel');
  const textHashtags = document.querySelector('.text__hashtags');
  const textDescription = document.querySelector('.text__description');

  const pristine = initValidateForm();

  function handleStopPagination(evt) {
    evt.stopPropagation();
  }

  function onClose() {
    toggleModal(overlay);
    imgUploadCancel.removeEventListener('click', handleImgUploadCancel);
    document.removeEventListener('keydown', handleKeyPress);
    pristine.reset();
    imgUploadInput.value = '';
    textHashtags.value = '';
    textDescription.value = '';
    textHashtags.removeEventListener('keydown', handleStopPagination);
    textDescription.removeEventListener('keydown', handleStopPagination);
  }

  function handleImgUploadCancel() {
    onClose();
  }

  function handleKeyPress(evt) {
    if (evt.key === 'Escape') {
      onClose();
    }
  }

  function handleChangeUploadInput(evt) {
    if (evt.target.value) {
      toggleModal(overlay);
      imgUploadCancel.addEventListener('click', handleImgUploadCancel);
      document.addEventListener('keydown', handleKeyPress);
      textHashtags.addEventListener('keydown', handleStopPagination);
      textDescription.addEventListener('keydown', handleStopPagination);
    }
  }

  imgUploadInput.addEventListener('change', handleChangeUploadInput);
}
