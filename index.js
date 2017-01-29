function theBeatlesPlay(musicians,instruments) {
  var arr = [];
  for (var i in musicians) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

function johnLennonFacts(facts) {
  var i = 0;
  var arr = facts;
  while (i < facts.length) {
    arr[i] += '!!!';
    i++;
  }
  return arr;
}

function iLoveTheBeatles(number) {
  var arr = ["I love the Beatles!"];
  var i = 0;
  if (number < 15) {
    do {
      arr.push("I love the Beatles!");
      i++;
    } while (i < number);
  }
  return arr;
}
