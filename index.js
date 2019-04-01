function theBeatlesPlay(musicians, instruments){
  var stuff = [];
  for (var i = 0; i < musicians.length; i++){
    stuff.push(musicians[i] + " plays " + instruments[i])
  } return stuff
}

function johnLennonFacts(facts){
    var i = 0;
    var array = [];
  while(i < facts.length){
    array.push(facts[i] + "!!!")
    i++;
  } return array;
}

function iLoveTheBeatles(num){
  var myArray = [];
  do {
    myArray.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return myArray;
}
