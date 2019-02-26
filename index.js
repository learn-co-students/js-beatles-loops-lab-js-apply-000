function theBeatlesPlay(musicians, instruments) {
  var allMusicians = []
  for (var i = 0; i < musicians.length; i++) {
    allMusicians.push(musicians[i] + " plays " + instruments[i]);
  }
  return allMusicians
}

function johnLennonFacts() {
  var facts = [
    
    "He was the last Beatle to learn to drive", "He was never a vegetarian", 
    "He was a choir boy and boy scout", 
    "He hated the sound of his own voice",
   
    
    ];
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] +"!!!");
    i++;
  }
  return newFacts
}

function iLoveTheBeatles(number) {
  var beatleLove = []
  do {
    beatleLove.push("I love the Beatles!");
    number++;
    
  } while (number < 15);
  return beatleLove
}
