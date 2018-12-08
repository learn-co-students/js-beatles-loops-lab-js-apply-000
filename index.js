const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];




function theBeatlesPlay (artist,piece){
var array = [];
for (var i = 0; i < musicians.length; i++){
   array[i] = musicians[i] + ' plays ' + instruments[i];
}
  return array;
}

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(number){
  var repeat = [];
  var i = 0;
  do {
    repeat[i] = "I love the Beatles!";
    i++;
    number++;
  }
  while (number < 15);
  return repeat;
}



