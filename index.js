// add solution here
function theBeatlesPlay(musicians, instruments){
  var newArr = new Array()
  for(var i = 0; i < musicians.length; i++){
      newArr[i] = (`${musicians[i]} plays ${instruments[i]}`)
  }return newArr
}

function johnLennonFacts(arr){
  var newArr = new Array()
  for(var i = 0; i < arr.length; i ++){
    newArr[i] = `${arr[i]}!!!`
  }return newArr
}

function iLoveTheBeatles(num){
  var newArr = new Array()
  //var counter = 0
  do{
    newArr.push("I love the Beatles!")
    num ++
  } while(num < 15);
  return(newArr)
}
