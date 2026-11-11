import { getRandomNumberInRange } from './util.js';

export function createComment(id, avatar, message, name) {
  return {
    id,
    avatar,
    message,
    name
  };
}

export function createArrayComments(count, minUrlAvatar, maxUrlAvatar, messages, names) {
  const array = [];

  if (count <= 0) {
    return array;
  }

  for (let i = 0; i < count; i++) {
    array.push(createComment(i, `img/avatar-${getRandomNumberInRange(minUrlAvatar, maxUrlAvatar)}.svg`, messages[getRandomNumberInRange(0, messages.length - 1)], names[getRandomNumberInRange(0, names.length - 1)]));
  }

  return array;
}

export function createPhoto(id, url, description, likes, comments) {
  return {
    id,
    url,
    description,
    likes,
    comments
  };
}

export function createGallery(countPhotos, imageDescriptions, minLikes, maxLikes, minUrlAvatar, maxUrlAvatar, messages, names) {
  const gallery = [];

  for (let i = 0; i < countPhotos; i++) {
    const id = i;
    const url = `photos/${i + 1}.jpg`;
    const description = imageDescriptions[getRandomNumberInRange(0, imageDescriptions.length - 1)];
    const likes = getRandomNumberInRange(minLikes, maxLikes);
    const comment = createArrayComments(getRandomNumberInRange(0, 30), minUrlAvatar, maxUrlAvatar, messages, names);

    gallery.push(createPhoto(id, url, description, likes, comment));
  }

  return gallery;
}
