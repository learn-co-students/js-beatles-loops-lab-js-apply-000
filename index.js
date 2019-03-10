// add solution here
function theBeatlesPlay(muzArr,instArr){
  var rArr = []
  for(var i=0; i<muzArr.length; i++){
    rArr.push(`${muzArr[i]} plays ${instArr[i]}`)
  }
  return rArr
}

function johnLennonFacts(facts){
  var i = 0
  while(facts[i]){
    facts[i] += '!!!'
    i++
  }
  return facts
}

function iLoveTheBeatles(num){
  var rArr = []
  do {
    rArr.push("I love the Beatles!")
    num++
  } while (num < 15)
  return rArr
}