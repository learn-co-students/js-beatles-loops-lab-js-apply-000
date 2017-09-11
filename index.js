function theBeatlesPlay(musicians, instruments){
  var facts = [];
  for (var i = 0; i < musicians.length; i++){
    facts.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return facts;
}


function johnLennonFacts(facts){
  var lennonFacts = [];
  var i = 0;
  while (i < facts.length){
    lennonFacts.push(`${facts[i]}!!!`);
    i++
  }
return lennonFacts;
}

function iLoveTheBeatles(n){
  var iLoveTheBeatles = [];
  var i = 0;
  do{
    iLoveTheBeatles.push("I love the Beatles!");
    n++
  }
  while(n < 15);
return iLoveTheBeatles
}
