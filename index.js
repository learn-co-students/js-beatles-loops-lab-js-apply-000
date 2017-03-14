
function theBeatlesPlay(musicians, instruments){
  var myArray = [];
  for(var i = 0; i < musicians.length; i++){
    myArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return myArray;
}

function johnLennonFacts(facts){
  var i = 0;
  while ( i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var loveArray = [];
  var i = 0;
  do {
    loveArray[i] = "I love the Beatles!";
    i++;
    num++;
  } while(num < 15)
  return loveArray;
}
