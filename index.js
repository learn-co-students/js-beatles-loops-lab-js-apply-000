// params: array of musicians, array of instruments
// return an array of strings containing what instruments each musician plays
function theBeatlesPlay(musicians, instruments){
  var sentences = []

  for (let i = 0; i < musicians.length; i++){
    sentences.push(musicians[i] + " plays " + instruments[i])
  }
  return sentences
}

// params: an array of strings
// return an array of strings with "!" added
function johnLennonFacts(facts){
  var sentences = []

  for (let i = 0; i < facts.length; i++){
    sentences.push(facts[i] + "!!!")
  }
  return sentences
}

// params: a number "n"
// returns an array of strings - "I love the Beatles!" - n times IF < 15
function iLoveTheBeatles(n){
  var sentences = []

  do{
    sentences.push("I love the Beatles!")
    n++
  }
  while (n < 15);

  return sentences
}
