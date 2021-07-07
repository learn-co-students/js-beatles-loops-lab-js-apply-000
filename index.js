// add solution here
function theBeatlesPlay(musicians, instruments) {
	var whoPlaysWhat = [];
	for(var i = 0; i < musicians.length; i++) {
		var currentPairing = musicians[i] + " plays " + instruments[i];
		whoPlaysWhat.push(currentPairing);
	}
	return whoPlaysWhat;
}

function johnLennonFacts(facts) {
	var newFacts = [];
	var i = 0;
	while(i < facts.length) {
		var currentFact = facts[i] + "!!!";
		newFacts.push(currentFact);
		i++;
	}
	return newFacts;
}

function iLoveTheBeatles(n) {
	var arr = [];
	var str = "I love the Beatles!";
	var i = n;
	do {
		arr.push(str);
		i++;
	} while(i < 15);
	return arr;
}
