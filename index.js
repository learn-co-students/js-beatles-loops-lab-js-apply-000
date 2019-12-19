// add solution here
var beatlesFact = [];

const musicians = ["John Lennon", 
                  "Paul McCartney", 
                  "George Harrison", 
                  "Ringo Starr"];
                  
const instruments = ["Guitar", 
                    "Bass Guitar", 
                    "Lead Guitar", 
                    "Drums"];

function theBeatlesPlay() {
  for (var i = 0; i < musicians.length; i++) {
    beatlesFact.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatlesFact;
}


function johnLennonFacts(facts) {
  var shoutFacts = [];
  var i = 0;
  while (i < facts.length) {
    shoutFacts.push(facts[i] + "!!!");
    i++;
  }
  return shoutFacts;
}

function iLoveTheBeatles(num) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return love;
}

