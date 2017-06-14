function theBeatlesPlay(musicians, instruments){
  var theMusicians = [];
  for(var i = 0; i < musicians.length; i++){
    theMusicians.push(musicians[i] + " plays " + instruments[i]);
  }
  return theMusicians;
}


function johnLennonFacts(facts){
  var newfacts = [];
  var i = 0;
  while (i < facts.length){
    newfacts.push(facts[i] + "!!!");
    i++;
  }
  return newfacts;
}

function iLoveTheBeatles(num){
  var array = [];
//  var i = 0;
//  if (num < 15){
  do {
      array.push("I love the Beatles!");
      num++;
      }
  while (num < 15);
                // }
//  else
//  {
//    array.push("I love the Beatles!");
//  }
    return array;
}
