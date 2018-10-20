// FIRST FUNCTION theBeatlesPlay
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar","Bass Guitar","Lead Guitar","Drums"];

function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);    
  }
  return arr;
}

theBeatlesPlay(musicians, instruments);

// SECOND FUNCTION johnLennonFacts
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var index = 0;
  var factsArray = [];
  while(index < facts.length) {
    factsArray.push(facts[index] + "!!!");
    index++;
  }
  return factsArray;
}

johnLennonFacts(facts);

//THIRD FUNCTION iLoveTheBeatles
function iLoveTheBeatles(num) {
	var str = "I love the Beatles!";
	var i = 0;
	var arr = [];
	do {
	i++;
	arr.push(str);
	} while(i < num + 1 && num < 15);
	return arr;
}

iLoveTheBeatles(17);