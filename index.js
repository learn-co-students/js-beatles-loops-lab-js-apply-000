function theBeatlesPlay(musicians, instruments){
  var sentences = new Array()
  for (var i = 0; i < musicians.length; i++){
    sentences.push(musicians[i] + " plays " + instruments[i])
    // console.log(musicians[i])
  }
  // console.log(sentences)
  return sentences
}

function johnLennonFacts(facts){
  var with_exclamations = []
  var i = 0
  while (i < facts.length){
    with_exclamations.push(facts[i] + '!!!')
    i ++
  }

  return with_exclamations
}

function iLoveTheBeatles(number){
  var repetitions = []
  do{
    repetitions.push('I love the Beatles!')
    number++
  }while (number < 15)
  return repetitions
}
