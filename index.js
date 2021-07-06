function theBeatlesPlay(musicians, instruments){
  let resultArray = []
  for(let i = 0; i < musicians.length; i++){
    resultArray.push(musicians[i] + ' plays ' + instruments[i])
  }
  return resultArray
  }
  
  
function johnLennonFacts(facts){
  let result = []
  let i = 0
  while(i < facts.length){
    result.push(facts[i] + '!!!')
    i++    
  }
  return result 
}
    
  
function iLoveTheBeatles(num){
  let result = []
  let i = 0
  do {
    result.push("I love the Beatles!")
    i++
  }
  while(num < 15 && i < (15 - num));
  return result 
}
   