import { createGalleryContent } from './create-components.js';
import { toggleClassForModal, closeModal } from './util.js';

// Модальное окно галлереи

function showModal(e, modalElementPicture, target, arrayPhotos) {
  e.preventDefault();
  toggleClassForModal(modalElementPicture);

  const link = target.closest('.picture');
  const id = link.id;
  const currentPhoto = arrayPhotos[id];

  const removeCommentsLoaderListener = createGalleryContent(modalElementPicture, currentPhoto);

  const closeButton = modalElementPicture.querySelector('.big-picture__cancel');

  function onClose() {
    closeModal(modalElementPicture);
    closeButton.removeEventListener('click', handleClickClose);
    document.removeEventListener('keydown', handleKeyPress);
    removeCommentsLoaderListener();
  }

  function handleClickClose() {
    onClose();
  }

  function handleKeyPress(evt) {
    if (evt.key === 'Escape') {
      onClose();
    }
  }

  document.addEventListener('keydown', handleKeyPress);
  closeButton.addEventListener('click', handleClickClose);
}

export function eventListenerPicture(picturesContainer, arrayPhotos, modalElementPicture) {

  function handleClickGallery(e) {
    const target = e.target;
    if (target.closest('.picture')) {
      showModal(e, modalElementPicture, target, arrayPhotos);
    }
  }

  picturesContainer.addEventListener('click', handleClickGallery);
}
