import { COUNT_PHOTOS, IMAGE_DESCRIPTIONS, MIN_LIKES, MAX_LIKES, MIN_URL_AVATAR, MAX_URL_AVATAR, MESSAGES, NAMES } from './data.js';
import { createGallery } from './optional.js';
import { createPicture } from './create-components.js';
import { eventListenerPicture } from './event-listener-picture.js';

const arrayPhotos = createGallery(COUNT_PHOTOS, IMAGE_DESCRIPTIONS, MIN_LIKES, MAX_LIKES, MIN_URL_AVATAR, MAX_URL_AVATAR, MESSAGES, NAMES);

const picturesContainer = document.querySelector('.pictures');
const picturesListFragment = document.createDocumentFragment();
const modalElementPicture = document.querySelector('.big-picture');

arrayPhotos.forEach((element) => {
  picturesListFragment.append(createPicture(element));
});

picturesContainer.append(picturesListFragment);

eventListenerPicture(picturesContainer, arrayPhotos, modalElementPicture);
