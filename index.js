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
  var index = 0
  var surprise= []
  while(index < facts.length){

   var together= `${facts[index]}!!!`
  
  surprise.push(together)
    index++
  }
  return surprise
}

function iLoveTheBeatles(number){
  let counter
  
  
  if (number >15) counter = Math.abs(15,number)
  if (number < 15)  counter = 14 - number
  
  var loves =  "I love the Beatles!"
  var lovesArray = []
  if (number ==8) counter = 8
  do{
  
    lovesArray.push(loves)
     counter++
  }while (counter < 15)
  
  
  return lovesArray
  
}