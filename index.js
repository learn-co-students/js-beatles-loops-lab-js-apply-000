// add solution here
function theBeatlesPlay(musicians, instruments){
  var facts = [ ]
  var i = 0;
  for(i = 0; i < musicians.length; i++) { 
  facts.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return facts;
}

function johnLennonFacts(facts){
  var newFacts = [ ];
  var i =0;
  while(i<facts.length){
    newFacts.push(facts[i] + '!!!');
    i++
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var love =[];
  do {
  n += 1;
  love.push("I love the Beatles!");
} while (n < 15);

return love;
}