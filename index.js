const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var beatleInstArr = [];
  for (var i = 0; i < musicians.length; i++) {
    beatleInstArr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  
  return beatleInstArr;
}


const facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
        ];
        
function johnLennonFacts(facts) {
  var factsArr = [];
  var i = 0;
  
  while (i < facts.length) {
    factsArr.push(facts[i] + '!!!');
    i++;
  }
  
  return factsArr;
}

function iLoveTheBeatles(n) {
  var arr = [];
  
  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  
  return arr; 
}




