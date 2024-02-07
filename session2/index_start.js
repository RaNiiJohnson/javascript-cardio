// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(str) {
  // Return a single longest word
  const words = str
    .toLowerCase()
    .match(/[a-z0-9]+/g)
    .sort((a, b) => b.length - a.length);

  const longestWord = words.filter((word) => words[0].length === word.length);

  // Only return an array if multiple words, otherwise return a string
  // Return an array and include multiple words if they have the same length
  if (longestWord.length === 1) {
    return words[0];
  }
  return longestWord;
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  arrInit = [];
  let i = 0;

  while (i < arr.length) {
    arrInit.push(arr.slice(i, i + len));

    i += len;
  }

  return arrInit;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // return [].concat(...arrays);
  return arrays.reduce((a, b) => a.concat(b));
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return helperString(str1) === helperString(str2);
}

//helper function
function helperString(str) {
  return str.toLowerCase().replace(/[^\w]/g, "").split("").sort().join("");
}
// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  const newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if ((char === "z") | (char === "Z")) return "a";
    return String.fromCharCode(char.charCodeAt() + 1);
  });

  return newStr.replace(/a|e|i|o|u/gi, (char) => char.toUpperCase());
}
// Call Function
const output = letterChanges("hello there");

console.log(output);
