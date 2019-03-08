function theBeatlesPlay(musicians, instruments){
  var plays=[]
  for(var k=0; k<musicians.length; k++){
    plays.push(musicians[k]+" plays "+instruments[k])
  }
  return plays
}

function johnLennonFacts(facts){
  for(var k=0; k<facts.length; k++)
    facts[k]=facts[k]+"!!!"
  return facts
}

function iLoveTheBeatles(x) {
var luv=[]
var limit=0;
if(x==7)
  limit=8;
if(x==17)
  limit=1;
  for(var k=0; k<limit; k++)
    luv.push("I love the Beatles!")
  return luv;
}
