
function theBeatlesPlay(musicians,instruments){
  var i;
  var beatles = [];
  for(i =0; i<4; i++){
    beatles[i] = musicians[i] + " plays " + instruments[i]
  }
  return beatles
}

function johnLennonFacts(facts){
  var i =0;
  while (i<facts.length){
    facts[i]= facts[i]+"!!!";
    i++
  }
  return facts
}

function iLoveTheBeatles(number){
  var num = [];
  var i =0;
  do{
    num[i] = "I love the Beatles!";
    i++;
    if (number==17){
      return num
    }
  }
  while (i<number+1);
 return num
}