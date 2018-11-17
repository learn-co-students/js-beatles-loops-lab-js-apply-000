function theBeatlesPlay (musicians, playinstruments) {
  var x = []
  for(let i = 0; i<musicians.length; i++){
    x.push(`${musicians[i]} plays ${playinstruments[i]}`)
  }
  return x 
}
function johnLennonFacts(facts) {
  var i = 0;
  while(i < facts.length) {
    facts[i] += '!!!'
  i++ 
  }
  return facts
    
   
    
    
  
}


function iLoveTheBeatles(number) {
  var x = []
  
  do{
    x.push("I love the Beatles!")
    number++;
  } while(number <15)
  return x
    
}
  


  
  
 