// add solution here
// FIRST challenge function theBeatlesPlay

var musicians = [
	"John",
	"Paul",
	"Ringo",
	"George"
];

var instruments = [
	"drums",
	"sax",
	"harp",
	"guitar"
];

function theBeatlesPlay(musicians, instruments) {
  var blurb = [];
  for (var i = 0; i < musicians.length; i++) {
    blurb[i] = musicians[i] + " plays " + instruments[i];
  }
  return blurb;
}

var blurb = theBeatlesPlay(musicians, instruments);


// SECOND challenge function johnLennonFacts


var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];



function johnLennonFacts(facts) {
	var extremeFacts = [];
	var i = 0;

	while (i < facts.length) {
		extremeFacts[i] = facts[i] + "!!!";
		i++
	}
	return extremeFacts;
}


var extremeFacts = johnLennonFacts(facts);



// THIRD challenge function iLoveTheBeatles

function iLoveTheBeatles(numParam) {
var muchLove = [];
var i = 0;

do {
	muchLove[i] = "I love the Beatles!";
	i = i + 1;
	numParam = numParam + 1;
} while (numParam < 15);


return muchLove;
}

iLoveTheBeatles(7);
