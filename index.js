// add solution here


function theBeatlesPlay(musicians, instruments){
  var facts = [];
  var i;
  
  for(i = 0; i < musicians.length; i++) {
    facts.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return facts;
}

function johnLennonFacts(facts){
  var funFacts = [];
  var i = 0;
  
  while (facts[i]){
    funFacts.push(`${facts[i]}!!!`);
    i++;
  }
  
  return funFacts;
}

function iLoveTheBeatles(number){
  var beatlesArray = [];
  
  do {
    beatlesArray.push('I love the Beatles!');
    number++;
  } 
  while(number<15);
  
  return beatlesArray;
}