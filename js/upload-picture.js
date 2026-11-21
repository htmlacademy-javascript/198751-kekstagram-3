import { toggleModal } from './util.js';
import { initValidateForm } from './user-form.js';


export function uploadPicture() {
  const overlay = document.querySelector('.img-upload__overlay');
  const imgUploadInput = document.querySelector('.img-upload__input');
  const imgUploadCancel = document.querySelector('.img-upload__cancel');
  const textHashtags = document.querySelector('.text__hashtags');
  const textDescription = document.querySelector('.text__description');
  let disposeValidation = null;

  function handleStopPagination(evt) {
    evt.stopPropagation();
  }

  function onClose() {
    toggleModal(overlay);
    imgUploadCancel.removeEventListener('click', handleImgUploadCancel);
    document.removeEventListener('keydown', handleKeyPress);
    imgUploadInput.value = '';
    textHashtags.removeEventListener('keydown', handleStopPagination);
    textDescription.removeEventListener('keydown', handleStopPagination);
    disposeValidation?.();
    disposeValidation = null;
  }

  function handleImgUploadCancel() {
    onClose();
  };

  function handleKeyPress(evt) {
    if (evt.key === 'Escape') {
      onClose();
    }
  }

  function handleChangeUploadInput(e) {
    if (e.target.value) {
      toggleModal(overlay);
      imgUploadCancel.addEventListener('click', handleImgUploadCancel);
      document.addEventListener('keydown', handleKeyPress);
      textHashtags.addEventListener('keydown', handleStopPagination);
      textDescription.addEventListener('keydown', handleStopPagination);
      disposeValidation = initValidateForm();
    }
  };

  imgUploadInput.addEventListener('change', handleChangeUploadInput);
}
