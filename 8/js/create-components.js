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
