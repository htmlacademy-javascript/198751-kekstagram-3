import { DEFAULT_COUNT_COMMENTS } from './const.js';

export function createPicture(photoObject) {
  const pictureElementTemplate = document.querySelector('#picture').content
    .querySelector('.picture')
    .cloneNode(true);

  pictureElementTemplate.id = photoObject.id;

  const imagesElement = pictureElementTemplate.querySelector('.picture__img');
  const likesElement = pictureElementTemplate.querySelector('.picture__likes');
  const commentsElement = pictureElementTemplate.querySelector('.picture__comments');

  imagesElement.src = photoObject.url;
  imagesElement.alt = photoObject.description;

  likesElement.innerText = photoObject.likes;

  commentsElement.innerText = photoObject.comments.length;

  return pictureElementTemplate;
}

export function createCommentElement(url, author, text) {
  const item = document.createElement('li');
  item.classList.add('social__comment');

  const avatar = document.createElement('img');
  avatar.classList.add('social__picture');
  avatar.src = url;
  avatar.alt = author;
  avatar.setAttribute('width', '35');
  avatar.setAttribute('height', '35');

  const socialText = document.createElement('p');
  socialText.classList.add('social__text');
  socialText.innerText = text;

  item.append(avatar);
  item.append(socialText);

  return item;
}

export function createCommentsList(startComments, endComments, commentsList, fragment) {
  for (let i = startComments; i < endComments; i++) {
    fragment.append(createCommentElement(commentsList[i].avatar, commentsList[i].name, commentsList[i].message));
  }

  return fragment;
}

export function createGalleryContent(modalElementPicture, currentPhoto) {
  const bigPictureImages = modalElementPicture.querySelector('.big-picture__img img');
  bigPictureImages.src = currentPhoto.url;
  bigPictureImages.alt = currentPhoto.description;

  const likesCount = modalElementPicture.querySelector('.likes-count');
  const socialCaption = modalElementPicture.querySelector('.social__caption');
  const commentsLoader = modalElementPicture.querySelector('.comments-loader');
  const commentsList = currentPhoto.comments;
  let socialCommentShownCountContent = commentsList.length > DEFAULT_COUNT_COMMENTS ? DEFAULT_COUNT_COMMENTS : commentsList.length;
  const socialCommentShownCount = modalElementPicture.querySelector('.social__comment-shown-count');
  const socialCommentTotalCount = modalElementPicture.querySelector('.social__comment-total-count');
  const socialCommentsList = modalElementPicture.querySelector('.social__comments');
  socialCommentsList.innerHTML = '';
  const commentsListFragment = document.createDocumentFragment();
  let startComments = 0;
  let endComments = startComments + socialCommentShownCountContent;

  likesCount.innerText = currentPhoto.likes;
  socialCaption.innerText = currentPhoto.description;

  socialCommentShownCount.innerText = socialCommentShownCountContent;

  socialCommentTotalCount.innerText = commentsList.length;

  commentsLoader.classList.toggle('hidden', socialCommentShownCountContent === commentsList.length);

  function handleCommentsLoader() {
    socialCommentShownCountContent = socialCommentShownCountContent + DEFAULT_COUNT_COMMENTS > commentsList.length ? commentsList.length : socialCommentShownCountContent + DEFAULT_COUNT_COMMENTS;
    socialCommentShownCount.innerText = socialCommentShownCountContent;
    startComments = endComments;
    endComments = socialCommentShownCountContent;
    socialCommentsList.append(createCommentsList(startComments, endComments, commentsList, commentsListFragment));
    commentsLoader.classList.toggle('hidden', socialCommentShownCountContent === commentsList.length);
  }

  commentsLoader.addEventListener('click', handleCommentsLoader);

  socialCommentsList.append(createCommentsList(startComments, endComments, commentsList, commentsListFragment));

  return function () {
    commentsLoader.removeEventListener('click', handleCommentsLoader);
  };
}
