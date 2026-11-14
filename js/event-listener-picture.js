import { createCommentsList } from './create-components.js';
import { DEFAULT_COUNT_COMMENTS } from './data.js'

export function eventListenerPicture(picturesContainer, arrayPhotos, modalElementPicture) {

  function handleClick(e) {
    const target = e.target;
    if (target.closest('.picture')) {
      e.preventDefault();
      document.body.classList.add('modal-open');
      modalElementPicture.classList.remove('hidden');

      const link = target.closest('.picture');
      const id = link.id;

      const currentPhoto = arrayPhotos[id];

      const bigPictureImages = modalElementPicture.querySelector('.big-picture__img img');
      bigPictureImages.src = currentPhoto.url;
      bigPictureImages.alt = currentPhoto.description;

      const likesCount = modalElementPicture.querySelector('.likes-count');
      likesCount.innerText = currentPhoto.likes;

      const socialCaption = modalElementPicture.querySelector('.social__caption');
      socialCaption.innerText = currentPhoto.description;

      const socialCommentCount = modalElementPicture.querySelector('.social__comment-count');
      socialCommentCount.classList.add('hidden'); // временно скрываем
      const commentsLoader = modalElementPicture.querySelector('.comments-loader');
      commentsLoader.classList.add('hidden'); // временно скрываем

      const commentsList = currentPhoto.comments;

      const socialCommentShownCountContent = commentsList.length > DEFAULT_COUNT_COMMENTS ? DEFAULT_COUNT_COMMENTS : commentsList.length;
      const socialCommentShownCount = modalElementPicture.querySelector('.social__comment-shown-count');
      socialCommentShownCount.innerText = socialCommentShownCountContent;

      const socialCommentTotalCount = modalElementPicture.querySelector('.social__comment-total-count');
      socialCommentTotalCount.innerText = commentsList.length;

      const socialCommentsList = modalElementPicture.querySelector('.social__comments');
      socialCommentsList.innerHTML = '';
      const commentsListFragment = document.createDocumentFragment();

      const countComments = commentsList.length > DEFAULT_COUNT_COMMENTS ? DEFAULT_COUNT_COMMENTS : commentsList.length; // по клику на "Загрузить еще" эта переменная будет меняться
      const startComments = 0; // по клику на "Загрузить еще" эта переменная будет меняться
      const endComments = startComments + countComments;

      socialCommentsList.append(createCommentsList(startComments, endComments, commentsList, commentsListFragment));
    }
  }

  picturesContainer.addEventListener('click', handleClick);
}
