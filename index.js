function theBeatlesPlay(musicians, instruments) {
  var phrase = [];
  for (var i = 0; i < musicians.length; i++) {
    phrase.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrase;
}

function johnLennonFacts(facts) {
  var array = [];
  let i = 0;
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array
}

 function iLoveTheBeatles(num) {
  var phrase = [];
  do {
    phrase.push("I love the Beatles!");
    num++
  } while (num < 15);
  return phrase;
}
