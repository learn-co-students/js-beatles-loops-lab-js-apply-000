const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var result = []

  for (var i = 0; i < musicians.length; i++){
     result.push(musicians[i] + ' ' + "plays" + ' '+ instruments[i])
}
return result
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var n = []
  for (var i=0; i<facts.length; i++){
    n.push(facts[i] + "!!!")
  }
  return n
}




function iLoveTheBeatles(count){
  const result = [];
do {
    count++;
    result.push("I love the Beatles!")
  } while (count < 15);
  
  return result;
}








