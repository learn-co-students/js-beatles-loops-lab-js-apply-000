// add solution here
function theBeatlesPlay(musicians, instruments){
  let arr = []
  
  for(var i=0; i<musicians.length; i++){
    
    //interpolation didn't work here for some reason
    arr.push(musicians[i] + " plays " + instruments[i])
  }
  return arr
}

function johnLennonFacts(facts){
  var count = facts.length
  var i = 0
  
  while(i < count){
    facts[i] += "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(num){
  var arr = []
  var i=1
  do{
    arr.push("I love the Beatles!")
    num++
  } while(num < 15 )
  return arr
}
