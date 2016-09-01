function theBeatlesPlay(musicians, instruments) {
  var ary = [];
  for (var i = 0; i < musicians.length; i++) {
    ary.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return ary;
}

function johnLennonFacts(argument) {
  var i = 0;
  var ary = [];
  while (i < argument.length) {
    ary.push(argument[i] + "!!!");
    i += 1;
  }
  return ary;
}

function iLoveTheBeatles(num) {
  var ary = [];
  do {
    ary.push("I love the Beatles!");
    num += 1;
  } while (num < 15);
  return ary;
}
