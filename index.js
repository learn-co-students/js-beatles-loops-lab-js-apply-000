function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i = 0; i < musicians.length; i += 1) {
    array.push(musicians[i] + ' plays ' + instruments[i]) //concatenation and push method
  }
  return array //return array after the loops are done performing.
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var array = []
  var i = 0
  while(i < facts.length) {
    array.push(facts[i] + '!!!');
    i++
  }
  return array
}

function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push("I love the Beatles!")
    num++
  }
  while(num < 15) {
    return array
  }
}
// do while loops make sure the code runs at least once before checking the condition.
//if num = 7, it will run 8 times until reaching 15.
//if num = 17, it will run at least once.





