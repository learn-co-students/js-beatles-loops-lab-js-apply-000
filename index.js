// for loop

var musicians = ['John Lennon'];
var musicians_length = musicians.length 

var instruments = ['Guitar'];
var intruments_length = instruments.length;

function theBeatlesPlay (musicians, instruments) {

	const newarray = [];
	for (var i = 0; i < musicians_length; i++) {
		var output = musicians[i] + "plays the " + instruments[0]
		newarray.push(output);

		

	}

	return newarray	
}


// while loop

const facts = 
["He was the last Beatle to learn to drive", 
"He was never a vegetarian",
 "He was a choir boy and a boy scout", 
 "He hated the sound of his own voice"];
 

function johnLennonFacts (facts) {
	const newfacts = []
	var y = 0
	while (y < facts.length) {
		
		var newoutput = facts[y] + "!!!";
		y++;
		newfacts.push(newoutput);

	}

return newfacts

}

// do while loop

function iLovetheBeatles(n) {
	const array = [];

	do {
		array.push("I love the Beatles!")
		n++
	} while(n < 15)

	return array

}



