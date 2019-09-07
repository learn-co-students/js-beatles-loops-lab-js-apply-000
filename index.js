// add solution here

function theBeatlesPlay() {
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var xMusicians = [];
  for (var i=0; i < musicians.length; i++) {
    xMusicians.push(musicians[i] + " plays " + instruments[i]);
  }
  return xMusicians;
}

theBeatlesPlay(musicians, instruments);

    
function johnLennonFacts() {
  const facts = [
      'He was the last Beatle to learn to drive',
      'He was never a vegetarian',
      'He was a choir boy and boy scout',
      'He hated the sound of his own voice',
    ];
  var xFacts = [];
  var i = 0;
  while (i < facts.length) {
    xFacts.push(facts[i] + "!!!");
    i++;
  }
  return xFacts;
 
}




function iLoveTheBeatles(num) {
  var fans = [];
  do {
      fans.push("I love the Beatles!");
      num++;
  } while (num < 15);
  
  return fans;
}
  