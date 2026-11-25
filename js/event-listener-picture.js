import { createGalleryContent } from './create-components.js';
import { toggleClassForModal, toggleModal } from './util.js';

// Модальное окно галлереи

function showModal(evt, modalElementPicture, target, arrayPhotos) {
  evt.preventDefault();
  toggleClassForModal(modalElementPicture);

  const link = target.closest('.picture');
  const id = link.id;
  const currentPhoto = arrayPhotos[id];

  const removeCommentsLoaderListener = createGalleryContent(modalElementPicture, currentPhoto);

  const closeButton = modalElementPicture.querySelector('.big-picture__cancel');

  function onClose() {
    toggleModal(modalElementPicture);
    closeButton.removeEventListener('click', handleClickClose);
    document.removeEventListener('keydown', handleKeyPress);
    removeCommentsLoaderListener();
  }

  function handleClickClose() {
    onClose();
  }

  function handleKeyPress(evtKeyPress) {
    if (evtKeyPress.key === 'Escape') {
      onClose();
    }
  }

  document.addEventListener('keydown', handleKeyPress);
  closeButton.addEventListener('click', handleClickClose);
}

export function eventListenerPicture(picturesContainer, arrayPhotos, modalElementPicture) {

  function handleClickGallery(evt) {
    const target = evt.target;
    if (target.closest('.picture')) {
      showModal(evt, modalElementPicture, target, arrayPhotos);
    }
  }

  picturesContainer.addEventListener('click', handleClickGallery);
}
