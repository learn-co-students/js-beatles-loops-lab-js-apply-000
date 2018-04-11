function theBeatlesPlay(musicians, instruments) {
  var list = [];
  for (var i = 0; i < musicians.length; i++) {
    var strng = `${musicians[i]} plays ${instruments[i]}`;
    list.push(strng);
  }
  return list;
}

function johnLennonFacts(facts) {
  var i = 0;
  var ex = "!!!";
  var newlist = [];
  while (i < facts.length) {
    newlist.push(`${facts[i]}` + '!!!');
    i++;
  }
  return newlist;
}

function iLoveTheBeatles(number1) {
  var newlist = [];
  if (number1 < 15) {
    do {
      newlist.push("I love the Beatles!");
      number1 -= 1;
    }
    while (number1 > -1);
    return newlist;
  } else {
    newlist.push("I love the Beatles!");
    return newlist;
  }
}