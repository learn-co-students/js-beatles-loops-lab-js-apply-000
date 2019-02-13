// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments) {
var arr = [ ];
for (var i = 0; i < musicians.length; i++) {
  var str = musicians[ i ] + ' plays ' + instruments[ i ];
  arr.push(str);
 }
 return arr;
}
var facts = ["He was raised by his Aunt Mimi", "He was legally blind", "He had dyslexia", "he claimed to have seen a UFO"];
function johnLennonFacts(facts) {
  var shoutedFacts = []	

   let i = 0	
  while (i < facts.length) {	
    shoutedFacts.push(`${facts[i]}!!!`)	
    i++	
  }	

   return shoutedFacts 
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return array;
}

