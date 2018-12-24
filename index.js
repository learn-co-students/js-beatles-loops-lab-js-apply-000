const theBeatlesPlay = (mus, inst) => {
  let arr = [];
  for (let i = 0; i < mus.length; i++) {
    arr.push(mus[i] + ' plays ' + inst[i]);
  }
  return arr;
}

const johnLennonFacts = (arr) => {
  let arr2 = [];
  let i = 0
  while (i < arr.length) {
    arr2.push(arr[i] + '!!!');
    i++
  }
  return arr2;
}

const iLoveTheBeatles = (num) => {
  let arr = [];
  do {
    arr.push('I love the Beatles!');
    num += 1;
  }
  while (num < 15)
  return arr;
}