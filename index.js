function theBeatlesPlay(musicians,instruments){
  var i=0
  var tunes =[]
  for (i<0; i<musicians.length; i++){
    tunes.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return tunes
}
function johnLennonFacts(facts) {
  var i = 0
  var factsToReturn = []
  while (i < facts.length) {
    factsToReturn.push(facts[i] + "!!!")
    i = i + 1
  }
  return factsToReturn
}
function iLoveTheBeatles(number){
  var love = []
  do{
    love.push(`I love the Beatles!`);
    number++
  }
  while (number<15);
  return love
}
