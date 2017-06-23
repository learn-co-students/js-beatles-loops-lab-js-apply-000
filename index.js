function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  var len = musicians.length;
  for (var i = 0; i < len; i++) {
      var string = `${musicians[i]} plays ${instruments[i]}`;
      empty.push(string);
  }

  return empty;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newArray = [];

  while (facts[i]) {
    var string = facts[i] + "!!!";
    newArray.push(string);
    i++;
  }

  return newArray;
}

function iLoveTheBeatles(number) {
  var empty = [];
  var i = 0;
  do {
    empty.push("I love the Beatles!");
    i++;
  } while (i <= number && number < 15);

  return empty;

}
