// add solution here
function theBeatlesPlay(musicians, instr) {
  let newArr = [];
  for (let i = 0; i < musicians.length; i++) {
    let newstr = String(musicians[i] + ' plays ' + instr[i]);
    newArr.push(newstr);
  }
  return newArr;
}

function johnLennonFacts(arr) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr[0] + '!!!');
    arr.shift(arr[arr.length-1]);
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  let newArr = [];
  do {
    newArr.push("I love the Beatles!");
    num++
  }
  while (num < 15);
  return newArr;
}