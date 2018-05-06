function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for(var i = 0; i < 4; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles;
}

function johnLennonFacts(facts) {
  /* facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
    ];
    */
    var i = 0;
    while (i < facts.length) {
      facts[i] += "!!!";
      i++;
    }
    return facts;
}

johnLennonFacts(facts);

function iLoveTheBeatles(num) {
  var thisMuch = [];
  do {
    thisMuch.push("I love the Beatles!");
    num++;
    console.log(num);
  }
  while (num < 15);
    return thisMuch;
}

iLoveTheBeatles(num);

