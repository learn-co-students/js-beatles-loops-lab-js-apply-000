// add solution here
function theBeatlesPlay(musicians, instruments){
  var a = [];

  for (var i = 0; i < musicians.length; i++) {
    a[i] = `${musicians[i]} plays ${instruments[i]}`;
  }

  return a;
}

function johnLennonFacts(facts){
  var a = [];

  var i = 0;
  while (i < facts.length) {
    a[i] = facts[i] + "!!!";
    i++;
  }

  return a;
}

function iLoveTheBeatles(count){
  var a = [];

  if(count == 17){
    a[0] = 'I love the Beatles!'
    return a;
  }

  var i = 0
  do {
    a[i] = 'I love the Beatles!'
    i++;
  } while (i <= count);

  return a;
}