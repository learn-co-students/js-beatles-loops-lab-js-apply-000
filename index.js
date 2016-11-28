function theBeatlesPlay(array1, array2) {
  var newArray = [];

  for (var i = 0; i < array1.length; i++) {
    var thisBeatle = array1[i];
    var thisInst = array2[i];
    newArray.push(thisBeatle + " plays " + thisInst);
  }
  return newArray;
}

function johnLennonFacts(array) {
  var i = 0;
  var newArray = [];

  while (i < array.length) {
    newArray.push(array[i] + "!!!");
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var results = [];
  var i = num;

  do {
    results.push("I love the Beatles!")
    i++;
  }
  while (i < 15);
  return results;
}
