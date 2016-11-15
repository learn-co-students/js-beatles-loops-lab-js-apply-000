function theBeatlesPlay(musicians, instruments) {
  var results = [];

  for (var i = 0; i < musicians.length; i++){
    var info = musicians[i] + " plays " + instruments[i];

    results.push(info);
  }

  return results;
}

function johnLennonFacts(array){
  var i = 0
  var results = [];

  while (i < array.length){
    array[i] += "!!!"
    i++
  }

  return array;
}

function iLoveTheBeatles(num){
  var array = [];

  do {
    array.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return array;
}
