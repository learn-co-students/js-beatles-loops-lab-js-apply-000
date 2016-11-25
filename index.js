function theBeatlesPlay(musicians, instruments){
  var a1 = [];
  for(var x = 0; x<musicians.length; x++){
    var s = musicians[x] + " plays " + instruments[x];
    a1.push(s)
  }
  return a1;
}

function johnLennonFacts(facts){
  var len = facts.length;
  var counter = 0;
  while (counter < len){
    facts[counter] += "!!!";
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(x){
  var a1 = [];
  do {
    a1.push("I love the Beatles!");
    x++;
  } while (x < 15)
  return a1;
}
