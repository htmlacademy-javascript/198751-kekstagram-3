import { toggleClassForModal, closeModal } from './util.js';


export function uploadPicture() {
  const overlay = document.querySelector('.img-upload__overlay');
  // const form = document.querySelector('.img-filters__form');
  const imgUploadInput = document.querySelector('.img-upload__input');
  const imgUploadCancel = document.querySelector('.img-upload__cancel');

  function onClose() {
    toggleClassForModal(overlay);
    imgUploadCancel.removeEventListener('click', handleImgUploadCancel);
    document.removeEventListener('keydown', handleKeyPress);
    imgUploadInput.value = '';
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
      toggleClassForModal(overlay);
      imgUploadCancel.addEventListener('click', handleImgUploadCancel);
      document.addEventListener('keydown', handleKeyPress);
    }
  };

  imgUploadInput.addEventListener('change', handleChangeUploadInput);
}
