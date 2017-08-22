function theBeatlesPlay(musicians, instruments) {
  var theMusicians = [];

  for(var i = 0; i < musicians.length; i++) {
    theMusicians.push(`${musicians[i]} plays ${instruments[i]}`);
  }
    return theMusicians;
}

function johnLennonFacts(facts) {
  var myfacts = [];
  var i = 0;
  while (i < facts.length) {
    console.log(facts);
    myfacts.push(facts[i] + "!!!");
    i++;
  }
  return myfacts;
}

function iLoveTheBeatles(num) {
  var love = [];
  var i = num;
  do {
    love.push("I love the Beatles!");
    i++;
} while(i < 15);
  return love;
}
