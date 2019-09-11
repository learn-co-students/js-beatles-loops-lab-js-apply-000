// add solution here

function theBeatlesPlay(musicians, instruments){
  var emptyArray = []
  for (let i = 0; i < 4; i++){
      emptyArray.push(musicians[i] + " plays " + instruments[i])
    }
  return emptyArray 
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  
function johnLennonFacts(array){
  var i = 0
  var n = array.length
  var emptyArray = [];
  while ( i < n ){
    emptyArray.push(array[i] + "!!!")
    i++
  }
  return emptyArray
}

johnLennonFacts(facts)

function iLoveTheBeatles(num){
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    num++
  } while (num < 15);
  return emptyArray
}