function theBeatlesPlay (array1, array2) {
  let array3 = [];
  for (let i = 0; i < array1.length; i++) {
    array3.push(array1[i] + " plays " + array2[i]);
  }
  return array3;
}

function johnLennonFacts (arrayOfFacts) {
let newArray = [];
let i = 0;
while (i < arrayOfFacts.length) {
  newArray.push(arrayOfFacts[i] + "!!!");
  i++;
  }
  return newArray;
}

function iLoveTheBeatles (num) {
let array = [];
  do {
  array.push("I love the Beatles!");
  num++;
  } while (num < 15);
return array;
}
