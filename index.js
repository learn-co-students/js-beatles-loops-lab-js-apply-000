function theBeatlesPlay(musicians, instruments){
	var array = [];

	for (var i = 0; i < musicians.length; i++){
		var currentMus = musicians[i];
		var currentIns = instruments[i];
		array.push(currentMus + " plays " + currentIns);
	}

	return array;
}


function johnLennonFacts(facts){
	var array = [];
	var i = 0;

	while (i < facts.length){
		var currentFact = facts[i];
		array.push(currentFact + "!!!");
		i++;
	}

	return array;
}


function iLoveTheBeatles(number){
	var array = [];
	var i = number;

	do{
		array.push("I love the Beatles!");
		i++;
	} while (i < 15);

	return array;
}
