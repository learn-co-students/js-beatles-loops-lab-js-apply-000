// add solution here
function theBeatlesPlay(musicians, instruments){
  var solution = []
  var i = 0 
  for(i=0;i<musicians.length;i++){
    var str = `${musicians[i]} plays ${instruments[i]}`
    solution.push(str)
  }
  return solution
}

function johnLennonFacts(facts){
  var solution = []
  var i = 0
  while(i<facts.length){
    var str = `${facts[i]}!!!`
    solution.push(str)
    i++
  }
  return solution
}

function iLoveTheBeatles(number){
  var solution = []
  var i = 0
  do{
    var str = "I love the Beatles!"
    solution.push(str)
    i++
  }
  while(i<(15-number)&&(number<15))
  return solution
}