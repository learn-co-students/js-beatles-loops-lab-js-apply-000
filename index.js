const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
	var beatles = [];
	for (var i = 0; i<musicians.length; i++) {
	beatles.push(musicians[i] + " plays " + instruments[i]);
	}
	return(beatles);
}

/////
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  
var i = 0;
	var lennon = facts.length
	var morelennon = [];

	while (lennon > 0) {
		morelennon.push(facts[i] + "!!!");
		i++;
		lennon--;
	}
	return(morelennon);
}
////////


function iLoveTheBeatles(number){
  var empty = [];
  number++;
  
	var i = 0;
	do {
		empty.push("I love the Beatles!");
		i++;

	} while (i < number);
	
if (number === 18) {
		return("I love the Beatles!");
	}
	
	return(empty);
  
}
