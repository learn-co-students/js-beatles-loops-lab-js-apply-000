function theBeatlesPlay(musicians,instruments){
  var strings = [];
  for (var i = 0; i < musicians.length; i++) {
    strings[i]=(musicians[i] + " plays " + instruments[i]);
  }
  return strings;
}

function johnLennonFacts(facts){
  //having a hard time declaring a variable for the loops...
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++
  }
  return facts
}

function iLoveTheBeatles(number){
  var strings = [];
  var i = 0;
  do{
    strings.push("I love the Beatles!");
    i++;
  }
  while(i <= number && number < 15);
  return strings;
}
