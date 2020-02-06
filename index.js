// add solution here
 
function theBeatlesPlay(musicians,instruments){
  var beatles=[];
  for(var x=0;x<musicians.length;x++ ){
    beatles.push(musicians[x] + " plays " + instruments[x])
  }
  return beatles;
}
function johnLennonFacts(facts){
  var x=0;
  var beatFacts=[];
  while(x<facts.length)
  {
    beatFacts.push(facts[x] + "!!!");
 
    x++;
  }
 
  return beatFacts;
}

function iLoveTheBeatles(n){
  var love=[];
  do{
    love.push("I love the Beatles!")
    n++;
  }
  while(n<15)
  return love;
}
