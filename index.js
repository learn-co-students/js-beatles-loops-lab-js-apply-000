function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var newArray = [];

	for (var i = 0; i < musiciansArray.length; i ++) {
		var musicians = musiciansArray[i];

		for (var j = 0; j < instrumentsArray.length; j ++) {
			var instruments = instrumentsArray[j];

			if (i === j) {
				newArray.push(musicians + " plays " + instruments);
			}
    }
	}

  return newArray;
}

function johnLennonFacts(array) {
	var newArray = [];

  var i = 0;

  while (i < array.length) {
    var sentence = array[i];

		newArray.push(sentence + "!!!");
    i++;
  }

	return newArray;
}

function iLoveTheBeatles(number) {
	var newArray = [];

	var i = 0;
	var text = "I love the Beatles!";

	do {
		if (number < 15) {
			newArray.push(text);
		}
		i ++;
	}
	while (i < number)

	newArray.push("I love the Beatles!");
	return newArray;
}
