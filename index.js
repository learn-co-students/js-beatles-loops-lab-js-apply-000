function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

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

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number += 1
  } while (number < 15);
  return array;
} 
