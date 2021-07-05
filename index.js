// add solution here
function theBeatlesPlay(musicians,instruments) {
  var whatTheyPlay = []
  var i = 0
  for (i=0; i < musicians.length; i++) {
    whatTheyPlay.push(musicians[i] + " plays " + instruments[i])}
    return whatTheyPlay}

function johnLennonFacts(array){
  var i = 0
  var excitedFacts = []
  while (i<array.length) {
    excitedFacts.push(array[i]+"!!!");
    i++
  }
  return excitedFacts
}

function iLoveTheBeatles (num){
  var toFillArray = []
  var countIt = num
  do {toFillArray.push("I love the Beatles!");
    num++
  }
  while (num <15);
  return toFillArray
}

//theBeatlesPlay
//var beatles = ["John", "Paul", "George", "Ringo", "Yoko"]
//var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "poorly", "My Heart"]
//console.log (theBeatlesPlay(beatles,instruments))
//console.log ("the length is correct: " + (theBeatlesPlay(beatles,instruments).length === 5))

//johnLennonFacts
//const jfacts = [
//  "He was the last Beatle to learn to drive",
//  "He was never a vegetarian",
//  "He was a choir boy and boy scout",
//  "He hated the sound of his own voice"]
//console.log (johnLennonFacts(jfacts))

//iLoveTheBeatles
