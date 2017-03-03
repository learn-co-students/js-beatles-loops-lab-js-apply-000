function theBeatlesPlay(names, instruments) {
  var retArray = [];
  for (var i in names) {
    retArray.push(names[i] + " plays " + instruments[i]);
  }
  return retArray;
}

function johnLennonFacts(johnFacts) {
  for (var i in johnFacts) {
    johnFacts[i] = johnFacts[i] + "!!!";
  }
  return johnFacts;
}

function iLoveTheBeatles(n) {
  var outArr = [];
  var count = 0;
  do {
    outArr.push("I love the Beatles!");
    count = count + 1;
  } while (count <= n && n < 15);
  console.log(outArr);
  return outArr;
}
