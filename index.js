// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

function johnLennonFacts(facts) {
  var excitingFacts = []
  var i = 0
  while (i < facts.length) {
    excitingFacts.push(facts[i] + "!!!");
    ++i;
  }
  return excitingFacts
}

function iLoveTheBeatles(number) {
  var love = []
  do { 
    love.push("I love the Beatles!");
    number++;
  }
  while ( number < 15 );
  return love
}