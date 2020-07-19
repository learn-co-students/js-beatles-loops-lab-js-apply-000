// add solution here
function theBeatlesPlay(musicians,instruments){
  var p = []
  for(var i = 0; i <musicians.length; i++){
    p.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return p
}

function johnLennonFacts(facts){
  var i = 0
  while(i<facts.length){
    facts[i] += '!!!'
    i++
  }
  return facts;
}

function iLoveTheBeatles(number){
  var array = []
  var i = 0
  do{
    array.push('I love the Beatles!')
    i++
  }while(number < 15 && i < 15 - number)
  return array
}
