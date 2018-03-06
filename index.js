function theBeatlesPlay(musicians, instruments) {
  var output = [];
  for (var i = 0; i < musicians.length; i++) {
    output.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return output
}

function johnLennonFacts(array) {
  var index = 0;
  while (index < array.length) {
    array[index]+= "!!!";
    index++
  }
  return array
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++
  } while (num < 15);
  return arr
}
