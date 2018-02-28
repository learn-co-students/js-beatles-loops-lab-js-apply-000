function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i=0; i<musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(arr) {
  var counter = 0;
  var newArray = [];
  while(counter < arr.length) {
    newArray.push(arr[counter] + "!!!");
    counter ++;
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return arr;
}
