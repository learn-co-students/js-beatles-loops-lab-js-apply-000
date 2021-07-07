
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
  	array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}
function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return array;
}
// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for ( var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
 return array;
}

function johnLennonFacts() {
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  var factsArray = [];
  var i = 0;
  while (factsArray < facts) {
    factsArray.push(facts[i] + '!!!'); 
    i++;
}
  return factsArray;
}