// add solution here

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  ["He was the last Beatle to learn to drive",
	"He was never a vegetarian",
	"He was a choir boy and boy scout",
	"He hated the sound of his own voice"];
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  do{
    emptyArray.push('I love the Beatles!');
    number++;
  }
  while(number < 15);
  return emptyArray;
}