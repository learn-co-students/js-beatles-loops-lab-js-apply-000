theBeatlesPlay(musicians,instruments)
function theBeatlesPlay(musicians,instruments){
var emptyArray = []
  for( var i=0; i<musicians.length; i++){
    emptyArray.push(musicians[i] + " plays " + instruments[i])
  }
  return emptyArray
}

function johnLennonFacts(arr){
  var fact = []
  var i = 0
  while(i<arr.length){
    fact.push(arr[i] + "!!!")
  ++i
  }
  return fact
}

function iLoveTheBeatles(number){
 var anotherArray = []
 do{anotherArray.push ("I love the Beatles!")
  number++;
} while(number < 15)
return anotherArray
}
