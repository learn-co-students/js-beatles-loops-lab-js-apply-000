// add solution here
function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];

  for (var i=0; i<musicians.length; i++) {
    var string = musicians[i]+" plays "+instruments[i];
    emptyArray.push(string);
  }
  return emptyArray;
}

function johnLennonFacts(facts){
  var emptyArray = []; 
  
  var i = 0;
  while(i < facts.length){
    emptyArray[i] = facts[i]+"!!!";
    i++;
  }
  return emptyArray;
}


function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return array;
}
