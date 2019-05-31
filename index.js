
function theBeatlesPlay(musician,instrument){// add solution here
var musicians = [];
for (var i=0; i < musician.length; i++) {
  musicians.push(musician[i] + " plays " + instrument[i]);
}
return musicians;
}

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout",
"He hated the sound of his own voice"];

function johnLennonFacts(facts) {
var newFacts = [];
var i = 0;
while (i < facts.length) {newFacts.push(facts[i] +"!!!"); i++;
}
return newFacts;
}

function iLoveTheBeatles(number) {
var beatle = [];
do {beatle.push("I love the Beatles!");number++;
} 
while (number < 15);
return beatle;
}