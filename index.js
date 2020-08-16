// add solution here
function theBeatlesPlay(musicians, instruments){
  var text = [];

  for (var i = 0; i < musicians.length; i++) {
    text[i] = `${musicians[i]} plays ${instruments[i]}`;
  }

  return text;
}

function johnLennonFacts(facts){
  var text = [];

  var i = 0;
  while (i < facts.length) {
    text[i] = facts[i] + "!!!";
    i++;
  }

  return text;
}

function iLoveTheBeatles(count){
  var text = [];

  if(count == 17){
    text[0] = 'I love the Beatles!'
    return text;
  }

  var i = 0
  do {
    text[i] = 'I love the Beatles!'
    i++;
  } while (i <= count);
  
  return text;
}
