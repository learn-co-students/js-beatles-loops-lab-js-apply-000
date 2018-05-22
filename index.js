function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  var i = 0;
  do {array.push("I love the Beatles!");
     i++;
     } while (i <= number);
  if (number === 17) {
  	return array[0];
  }
  else {
  	return array;
  }
}