// add solution here
function theBeatlesPlay(musician, instruments){
  var facts = [];
  for(var i = 0; i < musician.length; i++){
    facts.push(`${musician[i]} plays ${instruments[i]}`);
  }
  return facts;
}

function johnLennonFacts(facts){
  var newFacts = [];
  
  var i = 0;
  while(i < facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  
  var n = [];
  
  do{
    n.push('I love the Beatles!');
    number++;
  }
  while(number < 15);
    return n;
}