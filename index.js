// add solution here
function theBeatlesPlay(musicians, instruments){
  //In order for this to work, we need two equal sized arrays.
  if(musicians.length != instruments.length){
    return null;
  }
  
  let result = [];
  
  for(var i = 0; i < musicians.length; i++){
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return result
}

//This is a great opportunity to use map!  So slick!
function johnLennonFacts(facts){
  return facts.map(fact => fact + "!!!")
}

function iLoveTheBeatles(amount) {
  let result = ["I love the Beatles!"]
  if(amount > 15) {
    return result
  }
  for(var i = 0; i < amount; i++) {
    result.push("I love the Beatles!")
  }
  
  return result
}