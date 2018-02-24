	var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
	var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];
function theBeatlesPlay (musicians, instruments) {
		var array = [];
	for (let i = 0; i < musicians.length; i++) {
		array.push(musicians[i] + " plays " + instruments[i]);
	}
	return array
}

function johnLennonFacts (facts) {
	var excitedFacts = [];
	var i = 0;
	while (i < facts.length) {
		excitedFacts.push(facts[i] + "!!!"); i++;
	}
	return excitedFacts
}

function iLoveTheBeatles (number) {
	var beatlesNumber = []
do {
	beatlesNumber.push("I love the Beatles!");
	number++
	}
	while (number < 15);
	return beatlesNumber
}