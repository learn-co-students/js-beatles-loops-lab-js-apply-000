function theBeatlesPlay(mus, inst){
  array = []
  for (i = 0; i < mus.length; i++){
    array.push(`${mus[i]} plays ${inst[i]}.`)
  }
  return array
}

function johnLennonFacts(facts){
  i = 0
  array = []
  console.log(facts.length)
  while (i < facts.length){
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(num){
  array = []
  do{
    array.push('I love the Beatles!')
    num++
  }
  while (num < 15);
  return array
}