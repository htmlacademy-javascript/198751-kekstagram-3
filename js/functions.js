function checksTheLengthOfString(string, count) {
  return string.toString().length <= count;
};

function checksForPalindrome(string) {
  string = string.toString().replace(/\s/g, '').toLowerCase();
  const reverseString = string.split('').reverse().join('');

  return string === reverseString;
};

function receivesNumbers(string) {
  string = string.toString();
  cleanedString = string.replace(/\D/g, '');
  return cleanedString === '' ? NaN : Number(cleanedString);
};
