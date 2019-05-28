// add solution here
function theBeatlesPlay (musicians, instruments){
var array = []
  for (let i = 0; i<musicians.length; i++){
    let string = `${musicians[i]} plays ${instruments[i]}`
    array.push(string)
  }
  return array
}

function johnLennonFacts (facts){
  var factArray = []
  var i = 0
  while (i<facts.length){
    factArray.push (`${facts[i]}!!!`)
    i++
  }
  return factArray
}

function iLoveTheBeatles (num){
  var array = []
  do {
    array.push('I love the Beatles!')
    num++
  }
  while (num<15);
  return array
}