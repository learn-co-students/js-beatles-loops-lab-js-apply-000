var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


theBeatlesPlay(musicians, instruments); 

function theBeatlesPlay(musicians, instruments) {
  var newArr = []; 
  for(var i =0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}

const factsArray = [
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