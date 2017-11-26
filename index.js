function theBeatlesPlay(musicians, instruments) {
  var result = [];
  var str = ''
  for (var i = 0; i < musicians.length; i++) {
    str = `${musicians[i]} plays ${instruments[i]}` 
    result.push(str);
  }
  return result;
}

function johnLennonFacts(facts) {
  var i = 0;
  var result = []; 
  while(i < facts.length) {
    result.push(facts[i] + "!!!");
    i++;
  }
  return result;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return arr;
}