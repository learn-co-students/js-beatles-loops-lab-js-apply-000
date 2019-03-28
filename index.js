// add solution here
function theBeatlesPlay(musicians, instruments) {
  var emptyarray = [];
    for (var i = 0; i < musicians.length; i++) {
      var anything = `${musicians[i]} plays ${instruments[i]}`
      emptyarray.push(anything)
  }
  return emptyarray
}


function johnLennonFacts(facts) {
  var emptyarray = []
    for (var i = 0; i < facts.length; i++) {
      var string= `${facts[i]}!!!`
        emptyarray.push(string)
  }
  return emptyarray
}

function iLoveTheBeatles(num) {
  var emptyarray = [];
  var i = 0;
  do {
    emptyarray[i] = "I love the Beatles!";
    i++;
    num++;
  }
  while (num < 15)
  return emptyarray;
}
