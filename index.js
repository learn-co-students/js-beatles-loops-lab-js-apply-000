// add solution here

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var i = 0; i < musicians.length; i++){   //length: to run the length of the database
    emptyArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return emptyArray;
}

function johnLennonFacts(facts){
  var results = []
  var number = 0
  while (number < facts.length) {
    results.push(facts[number++] + "!!!");
  }
  return results;
}

function iLoveTheBeatles(love){
  var newArray = []
  do{
    newArray.push("I love the Beatles!");
    love++
    }
    while(love < 15)
   return newArray;
}
