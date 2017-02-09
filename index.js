function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    array.push(string);
  } return array;
}

function johnLennonFacts(facts) {
  var arr = [];
  var i = 0;

  while (i < facts.length) {
    arr.push(facts[i] + "!!!");
    i++;
  }
  return arr;
}


function iLoveTheBeatles(num) {
  var array = [];
  do {
    var string = "I love the Beatles!";
    array.push(string);
    num++;
  } while (num < 15)
  return array;
}  
