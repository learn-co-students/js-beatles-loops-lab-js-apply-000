function theBeatlesPlay(arr1, arr2) {
  var emptyArr = [];
  for (let i = 0; i < arr1.length; i++) {
    emptyArr.push(`${arr1[i]} plays ${arr2[i]}`)
  }
  return emptyArr;
}

function johnLennonFacts(array) {
  var arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i] + '!!!');
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  
  do {
    arr.push("I love the Beatles!");
    num++;
  } 
  while (num < 15);
  return arr;
}