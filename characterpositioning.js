countLetters("lighthouse in the house");

function countLetters(str) {
  var noSpaces = str.split(" ").join("");
  charCount = {};
  var array = [];

  for (var i= 0; i < noSpaces.length; i++) {
    if (charCount[noSpaces[i]]) {
      charCount[noSpaces[i]].push(i);
    } else {
      charCount[noSpaces[i]] = [i];
      }

  }
      console.log(charCount);
}
