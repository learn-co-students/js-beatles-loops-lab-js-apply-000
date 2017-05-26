function theBeatlesPlay(artist, instrument){
  var str = []
  for(var i = 0; i < artist.length; i++){
    str.push(`${artist[i]} plays ${instrument[i]}`)
  }
  return str
}

function johnLennonFacts(facts){
  var i = 0;
  var excitingFacts = []
  while(i < facts.length){
    excitingFacts[i] = facts[i] + '!!!'
    i++
  }

  return excitingFacts
}

function iLoveTheBeatles(num){
  var love = []
  do {
    love.push("I love the Beatles!")
    num++
  }
  while(num < 15)

  return love
}
