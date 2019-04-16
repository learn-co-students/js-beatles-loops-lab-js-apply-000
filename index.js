
function theBeatlesPlay(arr1, arr2) {
  let returnArr = [];
  for (let i=0;i<arr1.length;i++) {
    returnArr.push(arr1[i] + ' plays ' + arr2[i]);
  }
  return returnArr;
}

function johnLennonFacts(arr) {
  let i = 0;
  while (i<arr.length) {
    arr[i] = arr[i] + '!!!';
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  let arr = []
  let i = num;
  do {
    arr.push('I love the Beatles!');
    i++;
  }
  while (i < 15);
  return arr;
}
