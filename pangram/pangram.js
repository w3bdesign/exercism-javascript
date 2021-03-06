export const isPangram = (characters) => {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let string = characters.toLowerCase().replace(/[^a-z]/g, '');
  for (var i = 0; i < letters.length; i++)
    if (string.indexOf(letters[i]) < 0) {
      return false;
    }
  return true;
};
