// var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
// var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function theBeatlesPlay (musicians,instruments) {
  var beatles = []; 												// new empty array
  var i;                                    // for loop counter
	for (i = 0; i < 4; i++) { 							  // for loop
	   beatles.push(musicians[i] + " plays " + instruments[i]); // add string elements to array of beatles and instruments
      }
  return beatles; 		// return array of strings
	}

function johnLennonFacts (facts) {
  var loudFacts = []; // new empty array
  var i = 0; // loop counter
  while (i < facts.length) {
    loudFacts.push(facts[i] + "!!!");
    i++;
  }
  return loudFacts;
}

function iLoveTheBeatles (times) {
  var expressions = []
  do {
    expressions.push("I love the Beatles!");
    times++;
  }
  while (times < 15);
  return expressions;
}
