// add solution here
function theBeatlesPlay(musicians, instruments){
 var mPlays = [] 
  var counter
  for(counter = 0; counter < musicians.length; counter++){
  
    var together= `${musicians[counter]} plays ${instruments[counter]}`
    mPlays.push(together)
  }
  
  return mPlays
}



function johnLennonFacts(facts){
  var index;
  while(index < facts.length){
    var together = '${facts[index]} + !!!';
    facts[index] += "!!!"
    index++;
  }
  return facts;
}