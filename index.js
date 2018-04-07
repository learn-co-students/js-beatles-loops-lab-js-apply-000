function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i<musicians.length; i++){
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var factsfinal = [];
  var i = 0;
  while (i < facts.length) {
        factsfinal.push(facts[i] + "!!!");
        i++;
  }
  return factsfinal;
}

function iLoveTheBeatles(times){
  var phrase = [];
  do {
    phrase.push("I love the Beatles!")
    times+=1
  } while (times < 15);
  return phrase;
   }
