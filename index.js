function theBeatlesPlay(musicians, instruments) {
  var newArray =[];
  for(var i = 0 ; i < musicians.length && instruments.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts){
  var i = 0;
  var newArray = [];
  while(i < facts.length) {
    newArray.push(facts[i]+ "!!!")
    i++;
  }
  return newArray;
}

function iLoveTheBeatles (number) {
  var newArray = [];
  do { newArray.push("I love the Beatles!");
  number ++
  } while (number < 15) 
  return newArray;
}

