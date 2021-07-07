function theBeatlesPlay(mus, inst){
  let array = []
  for(let i=0;i<mus.length; i++){
    array.push(''+ mus[i] + ' plays ' + inst[i] + '')
  }
  return array
}

function johnLennonFacts(facts){
  let excitedFacts = []

  var n = 0
  while (n<facts.length){
    excitedFacts.push(facts[n] + '!!!')
    n++
  }
  return excitedFacts
}

function iLoveTheBeatles(number){
var beatleLove = []

do{
  beatleLove.push('I love the Beatles!')
  number++
} while (number<15);
return beatleLove
}