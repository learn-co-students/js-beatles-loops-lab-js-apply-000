// add solution here
function theBeatlesPlay(musicians, instruments) {
  var sentences = [] 
  var i;
  for (i = 0; i < musicians.length; i++) {
    sentences.push(`${musicians[i]} plays ${instruments[i]}`) 
  }
  return sentences
}

function johnLennonFacts(facts){
  var i = 0
  while(i < facts.length){
    facts[i] += "!!!"
    i++ 
  }
  return facts
}

function iLoveTheBeatles(number){
  let loveBeatlesArray = []
  var loveMessage = "I love the Beatles!"
  do {
    loveBeatlesArray.push(loveMessage)
    number++;
  } while (number < 15)
  return loveBeatlesArray
}