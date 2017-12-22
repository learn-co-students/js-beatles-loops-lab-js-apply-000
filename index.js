function theBeatlesPlay(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    let str = '';
    str += arr1[i];
    str += ' plays ';
    str += arr2[i];
    arr.push(str);
  }
  return arr;
}

function johnLennonFacts(arr) {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    let str = '';
    str += arr[i];
    str += '!!!';
    result.push(str);
    i++;
  }
  return result;
}

function iLoveTheBeatles(n) {
  let arr = [];
  do {
    const str = 'I love the Beatles!';
    arr.push(str);
    n++;
  } while (n < 15) 
  return arr; 
}