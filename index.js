// add solution here
const singers = ["John Lennon", "Ringo Star", "Paul McCartney", "Dizzy"];
const instruments = ["guitar", "drums", "piano", "trumpet"];


var theBeatlesPlay = function (musiciansArray, instrumentsArray) {
	var collect = [];
	for (var i = 0; i<musiciansArray.length; i++) {
	collect.push(musiciansArray[i] + " plays " + instrumentsArray[i]);
	}
	return(collect);
};

theBeatlesPlay(singers, instruments);

var facts = [
	"He was the last Beatle to learn to drive",
	"He was never a vegetarian",
	"He was a choir boy and boy scout",
	"He hated the sound of his own voice"
];

var johnLennonFacts = function (factsArray) {
	var i = 0;
	var arrayCounter = factsArray.length
	var newFactsArray = [];

	while (arrayCounter > 0) {
		newFactsArray.push(factsArray[i] + "!!!");
		i++;
		arrayCounter--;
	}
	return(newFactsArray);
};

johnLennonFacts(facts);

var iLoveTheBeatles = function (num){
	var arr = [];
	num++;

	if (num === 18) {
		return("I love the Beatles!");
	}

	var i = 0;
	do {
		arr.push("I love the Beatles!");
		i++;

	} while (i < num);

	return(arr);
}

iLoveTheBeatles(2);
