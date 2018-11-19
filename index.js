function theBeatlesPlay (musicians, instruments){
  var emptyArr = [];

  for (var i=0; i<musicians.length; i++){
    emptyArr.push(musicians[i] + " plays " + instruments[i]);
  } 
  return emptyArr;
  }

function johnLennonFacts(johnFacts){
  var newFact = [];
  var i = 0;
  while (i < johnFacts.length){
  newFact.push(johnFacts[i] + "!!!")
  i++;
}
  return newFact;
  }

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return array;
}
