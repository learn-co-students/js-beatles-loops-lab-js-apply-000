function theBeatlesPlay(musicians, instruments) {
  var lineup = [];
  
  for (let b = 0; b < 4; b++){
    lineup.push(`${musicians[b]} plays ${instruments[b]}`);
  }
  
  return lineup;
}

function johnLennonFacts(array) {
  var facts = array;
  var iteration = facts.length;
  while (iteration > 0) {
    facts[iteration - 1] = `${facts[iteration-1]}!!!`;
    console.log(--iteration);
  } 
  
  return (facts);
}

function iLoveTheBeatles(n) {
  var groupie = [];
  do {
    groupie.push('I love the Beatles!');
    console.log(n++);
  } while (n < 15);
  
  return groupie;
}