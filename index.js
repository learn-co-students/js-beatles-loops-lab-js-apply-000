// add solution here
function theBeatlesPLay(musician, instrument){
  var array = []
  for(var i = 0; i < musician.length; i++){
    array[i] = musician[i] + "plays" + instrument[i]
  }
  return array
}

function johnLennonFacts(facts){
  var i = 0;
  var arr = []
  while(i < facts.length){
    arr[i] = facts[i] + "!!!"
  }
  
  return arr
}

function iLoveTheBeatles(number){
  var arr = []
  var i = 0
  do{
    arr[i] = "I love the Beatles!"
    number++
    "Input number: " + number
    i++
    
  }while(number < 15)
  return arr
}



