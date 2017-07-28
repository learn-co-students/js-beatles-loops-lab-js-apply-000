function theBeatlesPlay(musicians,instruments){
  var emptyArr = []
  var newStr = ''
  for(var i=0;i<musicians.length;i++){
     newStr = musicians[i]+' plays '+instruments[i]
     emptyArr.push(newStr)
  }
  return emptyArr
}
function johnLennonFacts(facts){
  var arr = []
  var str = ''
  var count = 0
  while(count<facts.length){
    str = facts[count]+'!!!'
    arr.push(str)
    count ++
  }
  return arr
}
function iLoveTheBeatles(num){
  var array = []
  if(num<15){
  var i = 0
    do{
      array.push('I love the Beatles!')
      i++
      }while(i<=num)
  }
  if(num>=15){
    array.push('I love the Beatles!')
  }
  return array
}
