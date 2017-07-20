function theBeatlesPlay(musicians, instruments) {
  var strArr = [];

  for (let i = 0; i < musicians.length; i++) {
    strArr.push(musicians[i] + " plays " + instruments[i]);
  }

  return strArr
}

function johnLennonFacts(array) {
  for (let i = 0; i<array.length; i++) {
    array[i] = array[i]+"!!!";
  };
  return array;
}

function iLoveTheBeatles(num) {
  var strArr = [];

  do {
    strArr.push("I love the Beatles!");
    num++;
  } while (num<15)

  return strArr;
}
