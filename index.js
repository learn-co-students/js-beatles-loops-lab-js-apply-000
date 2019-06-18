// add solution here
function theBeatlesPlay(musicians,instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    var newStr = '';
    var musician = musicians[i];
    newStr += musician + " plays " + instruments[i];
    arr.push(newStr);
  }
  return arr;
}

function johnLennonFacts(arr) {
  var newArr = [];
  var i = 0;
  while (i < arr.length) {
    newArr.push(arr[i] + "!!!");
    i++;
  }
  return newArr;
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