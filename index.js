function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var i =0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }

  return array;
}

function johnLennonFacts(facts){
  for(var j = 0; j < facts.length; j++){
      facts[j] +=  "!!!";
    }

  return facts;
}

function iLoveTheBeatles(number){
  var anotherArray = [];
  do{
    anotherArray.push("I love the Beatles!")
    number++;
  }while(number < 15)

  return anotherArray;
}
