// add solution here
function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for(let i=0; i<musicians.length; i++){
    var musician = musicians[i];
    var instrument = instruments[i];
    newArray.push(`${musician} plays ${instrument}`);
  }
  return newArray;
}

function johnLennonFacts(facts){
  var newArray = [];
  var i=0;
  while(i<facts.length){
    var newFact = facts[i]+'!!!';
    newArray.push(newFact);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(num){
  var newArray = [];
  var i = 0;
  do {
    newArray.push('I love the Beatles!'); 
    i++;
  }
  while (i <= num && num < 15);
  return newArray;
}