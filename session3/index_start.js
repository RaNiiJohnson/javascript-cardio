// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(...arg) {
  // 1st method
  return Array.from(arguments).reduce((a, b) => a + b);
  //2nd method
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(nbr) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) return false;
    }
    return true;
  }

  for (let i = 2; i <= nbr; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy() {}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(array) {
  const arr = [];
  const sortArr = [];

  array.forEach((e, i) => {
    if (e === -1) arr.push(i);
    else sortArr.push(e);
  });

  const sortedArr = sortArr.sort((a, b) => a - b);

  arr.forEach((val, i) => sortedArr.splice(arr[i], 0, -1));

  return sortedArr;
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  // // 1st method
  // const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // const debut = alphabet.indexOf(str[0]);
  // const end = alphabet.indexOf(str[str.length - 1]);
  // const verify = alphabet.substring(debut, end);
  // return Array.from(verify).find((w) => !str.includes(w));
  // 2nd method
  // return str.split("").map((w) => w.charCodeAt());
}

console.log(missingLetters("abce"));

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
  const arrEven = [];
  const arrOdd = [];

  arr.forEach((a) => {
    a % 2 === 0 ? arrEven.push(a) : arrOdd.push(a);
  });

  return [
    ...[arrEven.reduce((a, b) => a + b)],
    ...[arrOdd.reduce((a, b) => a + b)],
  ];
}

// console.log(evenOddSums([50, 60, 60, 45, 71]));
