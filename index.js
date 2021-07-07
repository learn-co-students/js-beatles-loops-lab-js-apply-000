var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay(musicians, instruments){
  var Beatles = []
  for (var n = 0; n< musicians.length; n++)
   {Beatles.push(musicians[n] + " plays " +  instruments[n])}
return Beatles
} 
console.log(theBeatlesPlay(musicians,instruments))
// 
//
//
var facts = ["He was the last Beatle to learn to drive","He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]

function johnLennonFacts(facts)
{var f= 0
var lennonFacts = []
while (f< facts.length) {lennonFacts.push(facts[f] + "!!!"); f++; }
  return lennonFacts
} 

console.log(johnLennonFacts(["foo","bar"]));
//
//
//
var x = 0
function iLoveTheBeatles(x)
{ var statement = []
do {statement.push("I love the Beatles!"); x++; }
while (x < 15)
  return statement
}

console.log(iLoveTheBeatles(7))
console.log(iLoveTheBeatles(17))