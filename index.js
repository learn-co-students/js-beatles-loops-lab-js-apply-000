var theBeatlesPlay = function(musicians, instruments){
  var strings = [];
  for (var i = 0; i < musicians.length; i++) {
    strings.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return strings;
}

var johnLennonFacts = function(facts){
  var i = 0;
  while(i < facts.length){
    facts[i] = facts[i] + "!!!";
    i += 1;
  }
  return facts;
}

var iLoveTheBeatles = function(number){
  var tooMuchLove = [];
  do {
    tooMuchLove.push("I love the Beatles!");
    number++;
  } while (number<15);
  return tooMuchLove;
}
