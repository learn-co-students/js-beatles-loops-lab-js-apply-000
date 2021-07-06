function theBeatlesPlay(musicians, instruments){
  var array = []
  i = 0;
  for (var i = 0; i < 4; i++){
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}



function johnLennonFacts(array){
  var factsArray = []
  while(array.length > 0){
    factsArray.push(array.shift() + "!!!")
  }
  return factsArray;
}


function iLoveTheBeatles(num){
  var array = [];
  
  var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}

do {
  array.push("I love the Beatles!")
} while (incrementVariable() < 15 - num)
return array
}
