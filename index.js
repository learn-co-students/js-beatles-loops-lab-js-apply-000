// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
    var bestGroup = [];
    
for (var i = 0; i < musicians.length; i++) {
    bestGroup.push(musicians[i]+ ' plays '+instruments[i]);
}
    return bestGroup;
}

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  let x = 0;
  let newFacts = [];
  while(x < facts.length) { 
    console.log(facts[x]);
     newFacts.push(facts[x] + "!!!");
      x++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  
  var beatles = [];
  var newArray = "I love the Beatles!";
  
  do {
    beatles.push(newArray);
    console.log(beatles[number]);
    number++;
    }
    while(number < 15);
    
      return beatles;
}
