function theBeatlesPlay(musicians, instruments){
  var bandInfo = []
  for(var i = 0; i < musicians.length; i++){
      bandInfo.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return bandInfo
}

function johnLennonFacts(facts){
  var factsArray = []
  var i = 0
  while(i < facts.length){
    factsArray.push(`${facts[i]}!!!`)
    i++
  }
  return factsArray
}

function iLoveTheBeatles(num){
  var i = 0;
  var geekOut = []
  if(num < 17){
    do{
      geekOut.push('I love the Beatles!')
      i++
    }
    while(i <= num)
  }
  else{
    geekOut.push('I love the Beatles!')
  }
  return geekOut

}
