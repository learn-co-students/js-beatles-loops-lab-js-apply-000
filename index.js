function theBeatlesPlay(musicians, instruments) {
  var output = [];
  for (let i = 0; i < musicians.length; i++) {
    var sentence = musicians[i] + ' plays ' + instruments[i];
    output.push(sentence);
  }
  return output;
}

function johnLennonFacts(facts) {
  let counter = 0;
  while (counter < facts.length) {
    facts[counter] += '!!!';
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  let arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15)
  return arr;
}
