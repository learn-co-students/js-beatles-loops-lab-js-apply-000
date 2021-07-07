// add solution here
function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var emptyArr = [];

  for (var i = 0; i < arrayOfMusicians.length; i++) {
    var str = arrayOfMusicians[i] + " plays " + arrayOfInstruments[i];
    emptyArr.push(str)
  }
  return emptyArr;
}

function johnLennonFacts(facts) {
  var i = 0;
  var arr = [];

  while (i < facts.length) {

    var str = facts[i] + "!!!";
    arr.push(str);
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var arr = [];

  do {
    arr.push("I love the Beatles!")
    num++;
  } while ( num < 15);
  return arr;
}
