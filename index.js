var theBeatlesPlay = function(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

var johnLennonFacts = function(facts) {
  var arr = [], counter = 0;
  while (counter < facts.length) {
    arr.push(facts[counter] + "!!!");
    counter++;
  }
  return arr;
}

var iLoveTheBeatles = function(num) {
  var arr = [], counter = num;
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return arr;
}
