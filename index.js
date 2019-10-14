// add solution here
function theBeatlesPlay(musicians,instruments){
  var  array = [];
  for (var i = 0; i< musicians.length; i++){
    var musician = musicians[i];
    var instrument = instruments[i];
    var newSentence = musician + ' plays ' + instrument;
    array.push(newSentence);
  }
  return array;
}


function johnLennonFacts(facts){
  var fact = [];
  var i = 0;
  while (i < facts.length){
    var newFact = facts[i]+ '!!!';
    fact.push(newFact);
    i++;
  }
  return fact;
}

function iLoveTheBeatles(num){
  var list =[];
  do{
    list.push('I love the Beatles!');
    num++;
  }
  while(num < 15);
  return list;
}
