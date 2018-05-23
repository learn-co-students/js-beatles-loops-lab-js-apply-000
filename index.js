function theBeatlesPlay(musicians, instruments){
  var array = []
  
  for(let i = 0; i < musicians.length; i++){
      array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var array = []
  let count = 0
  
  while(count < facts.length){
    array.push(`${facts[count]}!!!`)
    count ++
  }
  return array

}

function iLoveTheBeatles(n){
  var array = []

  do {
    array.push("I love the Beatles!")
    n++
  } while(n < 15){
    return array
  }

}