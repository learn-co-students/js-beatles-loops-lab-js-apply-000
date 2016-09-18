function iLoveTheBeatles(num){
	var empty = [];
		do {
		empty.push("I love the Beatles!") ;
		num++;
		}
		while (num<15);
		return empty;
	}
//iLoveTheBeatles(10);


function theBeatlesPlay(musicians, instruments) {
	var string = [];

	for (var i=0; i<musicians.length; i++) {
		string.push(musicians[i] + " plays " + instruments[i]) ;
	}

return string;
}

//theBeatlesPlay(["John Lennon"] , ["guitar"]);


function johnLennonFacts(facts) {

var fact = [];
var i=0;

while (i<facts.length) {
	fact.push(facts[i] + "!!!");
	i++;
}
return fact;
}

//johnLennonFacts([
//  "He was the last Beatle to learn to drive",
//  "He was never a vegetarian",
//  "He was a choir boy and boy scout",
//  "He hated the sound of his own voice"
//])
