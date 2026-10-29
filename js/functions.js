// eslint-disable-next-line no-unused-vars
function checksTheLengthOfString(string, count) {
  return string.toString().length <= count;
}

// eslint-disable-next-line no-unused-vars
function checksForPalindrome(string) {
  string = string.toString().replace(/\s/g, '').toLowerCase();
  const reverseString = string.split('').reverse().join('');

  return string === reverseString;
}

// eslint-disable-next-line no-unused-vars
function receivesNumbers(string) {
  string = string.toString();
  const cleanedString = string.replace(/\D/g, '');
  return cleanedString === '' ? NaN : Number(cleanedString);
}
