function theBeatlesPlay(musicians, instruments){
  const array = []
  for(let i=0; i<musicians.length; i++){
    const string = `${musicians[i]} plays ${instruments[i]}`
    array.push(string)
  }
  return array
}

function johnLennonFacts(facts){
  let i = 0
  while(i<facts.length){
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}


function iLoveTheBeatles(num){
  const array = []
  do{
    array.push("I love the Beatles!")
    num++
  } while (num < 15)
  return array
}
