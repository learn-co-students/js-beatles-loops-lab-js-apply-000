// add solution here

function theBeatlesPlay(musicians, instruments){
  var aLength = musicians.length
  var beatlesInfo = []
  for (let i = 0; i < aLength; i++){
    beatlesInfo.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesInfo
}

function johnLennonFacts(array){
  var i = 0
  while (array[i]){
    array[i] = `${array[i]}!!!`
    i++
  }
  return array
}

function iLoveTheBeatles(number){
var loveArray = []
var i = number
do {
  loveArray.push("I love the Beatles!")
  i++
}
while (i < 15)
return loveArray
}




