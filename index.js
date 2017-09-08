function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles;
}

function johnLennonFacts(facts) {
  var excitedFacts = [];
  let i = 0;
  while (i < facts.length) {
    excitedFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(number) {
	var array = [];
	do {
		array.push("I love the Beatles!");
		number++;
	} while (number < 15) {
		return array;
	}
}
