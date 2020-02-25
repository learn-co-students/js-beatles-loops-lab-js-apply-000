// add solution here

function theBeatlesPlay(musicians, instruments){
  var plays = [];
  for(var i=0; i<musicians.length; i++){
    plays.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return plays;
}


function johnLennonFacts(facts){
  var i = 0;
  var newFacts = [];
  while(i < facts.length ){
   newFacts.push(`${facts[i]}!!!`);
   i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var multiple = [];
  do {
    multiple.push("I love the Beatles!");
    n++;
  }
  while (n<15);
  
  return multiple;
}
