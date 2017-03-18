function theBeatlesPlay(musicians, instruments){
  var whoPlaysWhat = [];
  for (var i = 0; i < musicians.length; ++i){
      whoPlaysWhat.push(musicians[i] + " plays " + instruments[i]);
  }
  return whoPlaysWhat;
}

function johnLennonFacts(facts){
  var exclamation = "!!!";
  var exclamatedFacts = [];
  for (var i = 0; i < facts.length; ++i){
      exclamatedFacts.push(facts[i] + exclamation);
  }
  return exclamatedFacts;
}

function iLoveTheBeatles(count){
  var array = [];
  do {
    array.push("I love the Beatles!");
    count += 1;
  } while (count < 15);
  return array;
}
