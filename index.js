function theBeatlesPlay (musicians, instruments) {
    var emptyBeatlesArray = [];
    for (var i=0; i<musicians.length;i++){
      emptyBeatlesArray.push(musicians[i]+" plays "+ instruments[i])
    }
    return emptyBeatlesArray;
}

var factsArray = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"]
function johnLennonFacts (factsArray){
  var emptyLennonArray = []
  var i=0
  while (i < factsArray.length){
    emptyLennonArray.push(factsArray[i]+"!!!")
    i++
  }
  return emptyLennonArray
}

function iLoveTheBeatles (number){
  var emptyLoveArray = []
  do {
    emptyLoveArray.push("I love the Beatles!")
    number++
  }
  while (number<15);
  return emptyLoveArray
}
