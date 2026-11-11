export function createPicture(photoObject) {
  const pictureElementTemplate = document.querySelector('#picture').content
    .querySelector('.picture')
    .cloneNode(true);

  const imagesElement = pictureElementTemplate.querySelector('.picture__img');
  const likesElement = pictureElementTemplate.querySelector('.picture__likes');
  const commentsElement = pictureElementTemplate.querySelector('.picture__comments');

  imagesElement.src = photoObject.url;
  imagesElement.alt = photoObject.description;

  likesElement.innerText = photoObject.likes;

  commentsElement.innerText = photoObject.comments.length;

  return pictureElementTemplate;
}
