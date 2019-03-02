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
  var arr = [];

  while (facts.length > 1) {
    var str = facts[i] + " !!!";
    arr.push(str);
  }
  return arr;
}
