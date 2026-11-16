import { createGalleryContent } from './create-components.js';

// Модальное окно галлереи

function toggleClassForModal(modalElementPicture) {
  document.body.classList.toggle('modal-open');
  modalElementPicture.classList.toggle('hidden');
}

function closeModal(modalElementPicture) {
  toggleClassForModal(modalElementPicture);
}

function showModal(e, modalElementPicture, target, arrayPhotos) {
  e.preventDefault();
  toggleClassForModal(modalElementPicture);

  const link = target.closest('.picture');
  const id = link.id;
  const currentPhoto = arrayPhotos[id];

  createGalleryContent(modalElementPicture, currentPhoto);

  const closeButton = modalElementPicture.querySelector('.big-picture__cancel');

  function onclose() {
    closeModal(modalElementPicture);
    closeButton.removeEventListener('click', handleClickClose);
    document.removeEventListener('keydown', handleKeyPress);
  }

  function handleClickClose() {
    onclose();
  }

  function handleKeyPress(evt) {
    if (evt.key === 'Escape') {
      onclose();
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

// export function eventListenerLoadComments(commentsLoader) {
//   commentsLoader.addEventListener('click', () => console.log(commentsLoader));
// }
