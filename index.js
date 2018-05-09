function theBeatlesPlay(musicians,instruments){
  var instrumentsThatMusiciansPlay= []
  for(let i= 0; i<musicians.length; i++){
   var toInsert= musicians[i]+' plays '+ instruments[i]
   instrumentsThatMusiciansPlay.push(toInsert)
  }
  return instrumentsThatMusiciansPlay
}

function johnLennonFacts(facts){
  var i= 0 
  while(i<facts.length){
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}

function iLoveTheBeatles(num){
  var result=[]
  var i= 0
  if (num<15) {
    do{ result.push("I love the Beatles!")
   i++ }
    while(i<num)
    
  } 
 result.push("I love the Beatles!") 
  return result
}
