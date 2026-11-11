import { createCommentElement } from './create-components.js';

export function eventListenerPicture(picturesContainer, arrayPhotos, modalElementPicture) {

  function handleClick(e) {
    const target = e.target;
    if (target.classList.contains('picture__img')) {
      e.preventDefault();
      const link = target.closest('.picture');
      const id = link.id;

      const currentPhoto = arrayPhotos[id];

      const bigPictureImages = modalElementPicture.querySelector('.big-picture__img img');
      bigPictureImages.src = currentPhoto.url;
      bigPictureImages.alt = currentPhoto.description;

      const likesCount = modalElementPicture.querySelector('.likes-count');
      likesCount.innerText = currentPhoto.likes;

      const socialCommentShownCount = modalElementPicture.querySelector('.social__comment-shown-count');
      socialCommentShownCount.innerText = '5';

      const socialCommentTotalCount = modalElementPicture.querySelector('.social__comment-total-count');
      socialCommentTotalCount.innerText = currentPhoto.comments.length;

      modalElementPicture.classList.remove('hidden');

      const socialCommentsList = modalElementPicture.querySelector('.social__comments');
      socialCommentsList.innerHTML = '';
      const commentsListFragment = document.createDocumentFragment();
      currentPhoto.comments.forEach((element) => {
        commentsListFragment.append(createCommentElement(element.avatar, element.name, element.message));
      });
      socialCommentsList.append(commentsListFragment);
    }
  }

  picturesContainer.addEventListener('click', handleClick);
}
