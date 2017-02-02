function theBeatlesPlay(musArr,insArr){
  var temp = []
  for(var i = 0; i < musArr.length; i++){
    temp[i] = musArr[i] + ' plays ' + insArr[i]
  }
  return temp
}

function johnLennonFacts(facArr){
  var i = 0
  while(i < facArr.length){
    facArr[i] = facArr[i] + '!!!'
    i++
  }
  return facArr
}

function iLoveTheBeatles(num){
  var temp = []
  var i = 0
  do{
    temp[i] = 'I love the Beatles!'
    num++
    i++
  } while(num < 15)
  return temp
}
