function theBeatlesPlay(musicians, instruments) {
  var sentenceArr = [];
  for (var i = 0; i < musicians.length; i++) {
    var sentence = musicians[i] + ' plays ' + instruments[i];
    sentenceArr.push(sentence);
  }
  return sentenceArr;
}

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + '!!!';
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var soMuchLove = ['I love the Beatles!'];
  var i = num + 1;
  while (i < 15) {
    soMuchLove.push('I love the Beatles!');
    i++;
  }
  return soMuchLove;
}
