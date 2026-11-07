export function getRandomNumberInRange(min, max) {
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

  return Math.floor(Math.random() * (max - min + 1)) + min;

}
