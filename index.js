const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments){
  var result = [];
  for (var i = 0; i < musicians.length; i++){
    var musician = musicians[i];
    var instrument = instruments[i];
    var element = musician + ' plays ' + instrument;
    result.push(element);
  }
  return result;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var result = [];
  var i = 0;
  while (i < facts.length){
    var fact = facts[i];
    var element = fact + '!!!';
    result.push(element);
    i++;
  }
  return result;
}


function iLoveTheBeatles(n){
  var result = [];
  var i = n;
  
  do {
    i++
    result.push("I love the Beatles!");
  } 
  while (i < 15);
  
  return result;
}

