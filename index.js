function theBeatlesPlay(musicians, instruments){
  var newMusicians = [];
  for (let i = 0; i < musicians.length; i++) {
    newMusicians.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return newMusicians;
}

function johnLennonFacts(facts){
  var newFacts = [];
  let i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + '!!!');
    i++;
  }
    return newFacts;
}

function iLoveTheBeatles(n) {
  var array =[];
  do {
    array.push('I love the Beatles!'); 
    n++;
  } while (n < 15);
  return array;
}