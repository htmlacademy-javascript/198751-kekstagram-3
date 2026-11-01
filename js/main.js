const COUNT_PHOTOS = 25;
const MIN_LIKES = 25;
const MAX_LIKES = 200;
const MIN_URL_AVATAR = 1;
const MAX_URL_AVATAR = 6;

const IMAGE_DESCRIPTIONS = [
  'кот-йог в позе лотоса',
  'собака с очками и книгой',
  'бутерброд, убегающий от вилки',
  'кактус в солнечных очках',
  'пингвин в деловом костюме',
  'чайка, притворяющаяся голубем',
  'черепаха на роликах',
  'сова, забывшая, что она ночная',
  'банан в шапке-ушанке',
  'улитка на скоростной трассе',
  'енот, вскрывающий сейф из любопытства',
  'облако в форме тако',
  'кролик-боксёр в перчатках',
  'тостер, мечтающий стать самолётом',
  'лягушка в короне и мантии',
  'кошка, спорящая с отражением',
  'павлин, прячущий хвост от стыда',
  'белка с калькулятором и орехами',
  'осьминог, играющий на гитаре',
  'слон в крошечных кедах',
  'муравей с мегафоном',
  'дельфин в вязаном шарфе',
  'курица, читающая лекцию цыплятам',
  'жираф в лифте (очень напряжённый)',
  'попугай, пародирующий будильник',
  'медведь, делающий селфи с мёдом',
  'зебра в полосатом свитере (слишком много полос)',
  'черепашка, опаздывающая на гонку',
  'летучая мышь в пижаме — явно не спит',
  'краб, танцующий чечётку'
];

const NAMES = [
  'Александр',
  'Мария',
  'Дмитрий',
  'Елена',
  'Кирилл',
  'Анна',
  'Максим',
  'Виктория',
  'Артём',
  'Ольга',
  'Игорь',
  'Наталья',
  'Роман',
  'Татьяна',
  'Владимир',
  'Юлия',
  'Павел',
  'Светлана',
  'Никита',
  'Ирина',
  'Андрей',
  'Ксения',
  'Олег',
  'Анастасия',
  'Евгений',
  'Полина',
  'Борис',
  'Милана',
  'Григорий',
  'Зинаида'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !'
];

function getRandomNumberInRange(min, max) {
  min = Number(min);
  if (Number.isNaN(min)) {
    throw new TypeError('Ожидается число min', min);
  }
  min = Math.floor(min);

  max = Number(max);
  if (Number.isNaN(max)) {
    throw new TypeError('Ожидается число max', max);
  }
  max = Math.floor(max);

  if (min > max) {
    [min, max] = [max, min];
  }

  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  return random;
}

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
