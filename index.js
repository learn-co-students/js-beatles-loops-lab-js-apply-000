// add solution here
function theBeatlesPlay(musicians, instruments){
  var BeatlesPlay = []
  var i
    for(i = 0; i < musicians.length; i++){
      BeatlesPlay.push(musicians[i] + " plays " + instruments[i]);
    } i++
  return BeatlesPlay
}

function johnLennonFacts(array){
  var newArray = []
  let i = 0
  while(i < array.length){
    array[i]+= "!!!"
    newArray.push(array[i])
    i++
  }
  return newArray
}

function iLoveTheBeatles(num){
  var newArray= []
  do {
    newArray.push('I love the Beatles!')
    num++
  } 
  while(num < 15)
  return newArray
}


