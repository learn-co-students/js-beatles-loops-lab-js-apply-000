function theBeatlesPlay(musicians, instruments){
  var band = [];
  for(var i = 0; i < musicians.length; i++){
    band.push(musicians[i] + " plays " + instruments[i]);
  }
  return band;
}

function johnLennonFacts(facts){
  var newFacts = []
  var arrayCount = 0;

  while(arrayCount < facts.length){
    newFacts.push(facts[arrayCount] + '!!!')
    arrayCount++;
  }
  return newFacts;
}

function iLoveTheBeatles(num){
  var results = [];
  var counter = 0;
  do{
    results.push("I love the Beatles!");
    counter++;
  }while(num < 15 && counter <= num);
  return results;
}
