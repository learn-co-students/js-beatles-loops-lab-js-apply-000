function theBeatlesPlay(musiciansArr, instrumentsArr) {
  var array = [];
  var string = "";
  for (var i=0; i < musiciansArr.length; i++) {
    string = musiciansArr[i] + " plays " + instrumentsArr[i];
    array.push(string);
  }
  return array;
}

function johnLennonFacts(factArr) {
  var n = 0;
  while (n < factArr.length) {
    factArr[n] = factArr[n] + "!!!";
    n++;
  }
  return factArr;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number--;
  } while (number < 15 && number >= 0);
  return array;
}
