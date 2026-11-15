import { DEFAULT_COUNT_COMMENTS } from './data.js';
// import { eventListenerLoadComments } from './event-listener-picture.js';

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
  likesCount.innerText = currentPhoto.likes;

  const socialCaption = modalElementPicture.querySelector('.social__caption');
  socialCaption.innerText = currentPhoto.description;

  const socialCommentCount = modalElementPicture.querySelector('.social__comment-count');
  socialCommentCount.classList.add('hidden'); // временно скрываем
  const commentsLoader = modalElementPicture.querySelector('.comments-loader');

  const commentsList = currentPhoto.comments;

  const socialCommentShownCountContent = commentsList.length > DEFAULT_COUNT_COMMENTS ? DEFAULT_COUNT_COMMENTS : commentsList.length;
  const socialCommentShownCount = modalElementPicture.querySelector('.social__comment-shown-count');
  socialCommentShownCount.innerText = socialCommentShownCountContent;

  const socialCommentTotalCount = modalElementPicture.querySelector('.social__comment-total-count');
  socialCommentTotalCount.innerText = commentsList.length;

  // console.log(socialCommentShownCountContent, commentsList.length, socialCommentShownCountContent === commentsList.length);

  // if (socialCommentShownCountContent === commentsList.length) {
    commentsLoader.classList.add('hidden');
  // }

  // eventListenerLoadComments(commentsLoader);

  const socialCommentsList = modalElementPicture.querySelector('.social__comments');
  socialCommentsList.innerHTML = '';
  const commentsListFragment = document.createDocumentFragment();

  const countComments = commentsList.length > DEFAULT_COUNT_COMMENTS ? DEFAULT_COUNT_COMMENTS : commentsList.length; // по клику на "Загрузить еще" эта переменная будет меняться
  const startComments = 0; // по клику на "Загрузить еще" эта переменная будет меняться
  const endComments = startComments + countComments;

  socialCommentsList.append(createCommentsList(startComments, endComments, commentsList, commentsListFragment));
}
