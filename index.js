var theBeatlesPlay = function(musicians, instruments){
  var newArray = [];
  
  for(var i=0; i<musicians.length; i++){
      newArray.push(musicians[i] + " plays " + instruments[i])
    }
    
  return newArray;
}

var johnLennonFacts = function(facts){
  var newArray = [];
  var i = 0;
  while(i < facts.length){
    newArray.push(facts[i] + "!!!");
    i++;
  }
  
return newArray;
}

var iLoveTheBeatles = function(number){
  var newArray = [];
  
  do {
    newArray.push("I love the Beatles!");
    number++;
  }  while(number < 15);

  return newArray;
}