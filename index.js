// add solution here
function theBeatlesPlay(musicians, instruments){
  var array1 = []
  var i
  for(i = 0; i < musicians.length; i++){
    array1[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return array1
}

function johnLennonFacts(array2){
  var i = 0
  while(i < array2.length){
    array2[i] = `${array2[i]}!!!`
    i++
  }
  return array2
}

function iLoveTheBeatles(num){
  if(num >= 15){
    return ['I love the Beatles!']
  }
  var i = 0
  var arr = []
  do{
    arr[i] = "I love the Beatles!"
    i++
  }
  while(i <= num)
  return arr
}