function theBeatlesPlay(musicians, instruments){
  let array = []
  for (let i = 0; i < musicians.length; i++){
    let string = musicians[i] + " plays " + instruments[i]
    array.push(string)
  }
  return array
}

function johnLennonFacts(facts){
  let array = []
  let i = 0
  while (i < facts.length){
    array[i] = facts[i] + "!!!"
    i++
  }
  return array
}

function iLoveTheBeatles(number){
  let array = []
  do{
    array.push("I love the Beatles!")
    number++
  }while(number < 15)
  return array
}
