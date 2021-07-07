// add solution here

array = []

function theBeatlesPlay(musicians, instruments){
  let array = []
  for (let i=0; i<musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}


function johnLennonFacts(facts){
  let i=0
  let factsArray = []
  while(i<facts.length){
    factsArray.push(facts[i] + "!!!");
    i++
  }
  return factsArray
}
johnLennonFacts(facts)


function iLoveTheBeatles(number){
  let loveArray = []
  do{ 
    loveArray.push("I love the Beatles!");
    number++;
  } while(number < 15)
  return loveArray
}
  
  iLoveTheBeatles(16)