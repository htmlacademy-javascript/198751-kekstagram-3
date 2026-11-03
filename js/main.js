import { COUNT_PHOTOS, IMAGE_DESCRIPTIONS, MIN_LIKES, MAX_LIKES, MIN_URL_AVATAR, MAX_URL_AVATAR, MESSAGES, NAMES } from './data';
import { getRandomNumberInRange } from './util';

function createComment(id, avatar, message, name) {
  return {
    id,
    avatar,
    message,
    name
  };
}

function createArrayComments(count, prefixId, minUrlAvatar, maxUrlAvatar, messages, names) {
  const array = [];

  if (count <= 0) {
    return array;
  }

  for (let i = 0; i < count; i++) {
    array.push(createComment(`${prefixId}-${i}`, `img/avatar-${getRandomNumberInRange(minUrlAvatar, maxUrlAvatar)}.svg`, messages[getRandomNumberInRange(0, messages.length - 1)], names[getRandomNumberInRange(0, names.length - 1)]));
  }

  return array;
}

function createPhoto(id, url, description, likes, comments) {
  return {
    id,
    url,
    description,
    likes,
    comments
  };
}

function createGallery(countphotos, imageDescriptions, minlikes, maxlikes, minurlavatar, maxUrlavatar, messages, names) {
  const gallery = [];

  for (let i = 0; i < countphotos; i++) {
    const id = `photos-${i}`;
    const url = `photos/${i}.jpg`;
    const description = imageDescriptions[getRandomNumberInRange(0, imageDescriptions.length - 1)];
    const likes = getRandomNumberInRange(minlikes, maxlikes);
    const prefixId = id;
    const comment = createArrayComments(getRandomNumberInRange(0, 30), prefixId, minurlavatar, maxUrlavatar, messages, names);

    gallery.push(createPhoto(id, url, description, likes, comment));
  }

  return gallery;
}

// eslint-disable-next-line no-console
console.log(createGallery(COUNT_PHOTOS, IMAGE_DESCRIPTIONS, MIN_LIKES, MAX_LIKES, MIN_URL_AVATAR, MAX_URL_AVATAR, MESSAGES, NAMES));
