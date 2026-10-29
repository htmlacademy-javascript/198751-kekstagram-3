console.group('Функция проверяет длину строки');
function checksTheLengthOfString(string, count) {
  return string.toString().length <= count;
};

console.log('проверяемая строка: 20');
console.log(checksTheLengthOfString('проверяемая строка', 20)); // true
console.log('проверяемая строка: 18');
console.log(checksTheLengthOfString('проверяемая строка', 18)); // true
console.log('проверяемая строка: 10');
console.log(checksTheLengthOfString('проверяемая строка', 10)); // false

console.groupEnd();

console.group('Функция проверяет на палиндром');
function checksForPalindrome(string) {
  string = string.toString().replace(/\s/g, '').toLowerCase();
  const reverseString = string.split('').reverse().join('');

  return string === reverseString;
};

console.log('топот');
console.log(checksForPalindrome('топот')); // true
console.log('ДовОд');
console.log(checksForPalindrome('ДовОд')); // true
console.log('Кекс');
console.log(checksForPalindrome('Кекс'));  // false
console.log('Лёша на полке клопа нашёл');
console.log(checksForPalindrome('Лёша на полке клопа нашёл'));  // true
console.groupEnd();

console.group('Функция возвращает целые числа из строки');
function receivesNumbers(string) {
  string = string.toString();
  cleanedString = string.replace(/\D/g, '');
  return cleanedString === '' ? NaN : Number(cleanedString);
};

console.log('2023 год');
console.log(receivesNumbers('2023 год'));            // 2023
console.log('ECMAScript 2022');
console.log(receivesNumbers('ECMAScript 2022'));     // 2022
console.log('1 кефир, 0.5 батона');
console.log(receivesNumbers('1 кефир, 0.5 батона')); // 105
console.log('агент 007');
console.log(receivesNumbers('агент 007'));           // 7
console.log('а я томат');
console.log(receivesNumbers('а я томат'));           // NaN
console.log(receivesNumbers(2023)); // 2023
console.log(receivesNumbers(-1));   // 1
console.log(receivesNumbers(1.5));  // 15
console.groupEnd();
