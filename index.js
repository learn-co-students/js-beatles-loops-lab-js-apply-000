function theBeatlesPlay(musicians, instruments) {

  var actions = [];

  for (var i = 0; i < musicians.length; i++) {
    var str = musicians[i] + ' plays ' + instruments[i];
    actions.push(str);
  }

  return actions;
}

function johnLennonFacts(facts) {
  var punctuated = [];

  var i = 0;
  while (i < facts.length) {
    punctuated.push(facts[i] + '!!!');
    i++;
  }

  return punctuated;
}

function iLoveTheBeatles(num) {
  var declarations = [];

  if (num >= 15) {
    return ['I love the Beatles!'];
  }

  var i = 0;
  do {
    declarations.push('I love the Beatles!');
    i++;
  } while (i <= num);

  return declarations;
}
