function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray;
}

function johnLennonFacts(array) {
  var newArray = [];
  var i = 0;
  while(array[i] != undefined) {
    newArray.push(`${array[i]}!!!`);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return array;
}
