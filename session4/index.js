// ex: sumAll([1, 4]) => 10 , [4, 1] => 10 = 1 + 2 + 3 + 4
function sumAll(arr) {
  // // 1st method
  // let first, last;
  // if (arr[0] > arr[1]) {
  //   first = arr[1];
  //   last = arr[0];
  // destructuring
  //  [last, first] = arr
  // } else {
  //   first = arr[0];
  //   last = arr[1];
  // destructuring
  //  [first, last] = arr
  // }
  // let total = 0;
  // for (let i = 0; i <= last; i++) {
  //   total += i;
  // }
  // return total;

  // 2nd method
  const first = Math.min(...arr);
  const last = Math.max(...arr);
  let total = 0;
  for (let i = 0; i <= last; i++) {
    total += i;
  }
  return total;
}

// console.log(sumAll([1, 4]));

function diffArray(arr1, arr2) {
  // var newArr = [];

  // //arr1
  // for (let i = 0; i < arr1.length; i++) {
  //   let item = arr1[i];
  //   let notFound = true;

  //   for (let j = 0; j < arr2.length; j++) {
  //     let item2 = arr2[j];

  //     if (item === item2) notFound = false;
  //   }

  //   if (notFound) {
  //     newArr.push(item);
  //   }
  // }

  // //arr2
  // for (let i = 0; i < arr2.length; i++) {
  //   let item = arr2[i];
  //   let notFound = true;

  //   for (let j = 0; j < arr1.length; j++) {
  //     let item2 = arr1[j];

  //     if (item === item2) notFound = false;
  //   }

  //   if (notFound) {
  //     newArr.push(item);
  //   }
  // }

  // return newArr;

  const diff1 = arr1.filter((nombre) => !arr2.includes(nombre));
  const diff2 = arr2.filter((nombre) => !arr1.includes(nombre));

  return diff1.concat(diff2);
}

// console.log(diffArray([1, 2, 3, 4], [1, 2, 3, 5]));

//ex destroyer([1, 2, 3, 4], 1, 2) => [3, 4]
function destroyer(arr, ...i) {
  // //method 1
  // const toDestroy = Array.from(arguments).slice(1);
  // return arr.filter((element) => !toDestroy.includes(element));

  //method 2
  return arr.filter((element) => !i.includes(element));
}

// console.log(destroyer([1, 2, 3, 4], 1, 2));

function whatIsInAName(collection, source) {
  //method 1
  // var arr = [];
  // for (let i = 0; i < collection.length; i++) {
  //   const item = collection[i];
  //   isConform = true;
  //   for (let property in source) {
  //     if (!item.hasOwnProperty(property) || item[property] != source[property]) isConform = false;
  //   }
  //   if (isConform) arr.push(item);
  // }
  // return arr;
  // //method 2
  // collection.forEach((item) => {
  //   isConform = true;
  //   for (let property in source) {
  //     if (!item.hasOwnProperty(property) || item[property] != source[property])
  //       isConform = false;
  //   }
  //   if (isConform) arr.push(item);
  // });
  // return arr;

  //method 3
  return collection.filter((item) => {
    isConform = true;
    for (let property in source) {
      if (!item.hasOwnProperty(property) || item[property] != source[property])
        isConform = false;
    }

    return isConform;
  });
}
// console.log(
//   whatIsInAName(
//     [
//       { first: "Romeo", last: "Joh" },
//       { first: "bob", last: null },
//       { first: "RaNii", last: "Johnson" },
//     ],
//     { last: "Johnson" }
//   )
// );

function spinalCase(str) {
  str = str
    .replace(/ |_/g, "-")
    .replace(/([a-z])([A-Z])/g, `$1-$2`)
    .toLowerCase();
  return str;
}

// console.log(spinalCase("This IsSpinal_Tap"));

function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) after = after[0].toUpperCase() + after.slice(1);
  return str.replace(before, after);
}

// console.log(
//   myReplace("A quick bbrown fox Jumped over the lazy dog", "Jumped", "leaped")
// );

function pairElement(str) {
  //method 1
  const pairs = [];

  // for (let i = 0; i < str.length; i++) {
  //   const letter = str[i];

  //   if (letter === "C") pairs.push(["C", "G"]);
  //   else if (letter === "G") pairs.push(["G", "C"]);
  //   else if (letter === "A") pairs.push(["A", "T"]);
  //   else pairs.push(["T", "A"]);
  // }

  //method 2
  const associations = {
    C: "G",
    G: "C",
    A: "T",
    T: "A",
  };
  return Array.from(str).map((letter) => [letter, associations[letter]]);
}
console.log(pairElement("GCGA"));
