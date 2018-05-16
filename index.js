function theBeatlesPlay(musicians, instruments){
  var scentence = [];
  
  for (let i=0; i<musicians.length; i++){
    scentence[i] = musicians[i] + " plays " + instruments[i];
      }
  
  return scentence;
  
}

function johnLennonFacts(facts){
  
  var outputArray = [];
  var index = 0;
  while (index < facts.length){
    outputArray.push(facts[index] + "!!!");
    index++;
  }
  
  return outputArray;
}

function iLoveTheBeatles(number){
  var emptyArray = [];
  
  do {
    emptyArray.push("I love the Beatles!")
    number++;
      } while (number < 15);

  return emptyArray;
}