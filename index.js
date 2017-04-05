function theBeatlesPlay(musicians, instruments){
  var resultsArr = [];

  for (var i = 0; i < musicians.length; i++){
    resultsArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return resultsArr;
}

function johnLennonFacts(arr){
  var factsArr = [];

  for (var i = 0; i < arr.length; i++){
    var fact = arr[i];
    factsArr.push(fact + "!!!");
  }
  return factsArr;
}

function iLoveTheBeatles(n){
  var results = [];
  var i = n;

  do {
    results.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return results;
}
