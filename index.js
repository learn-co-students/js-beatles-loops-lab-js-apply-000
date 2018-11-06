// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments) {
  let beatles = [ ];
  for (let i=0; i<musicians.length; i++){
    const str = musicians[i] + " plays " + instruments[i];
    beatles.push(str);
  }
  return beatles
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(facts) {
  var jlfacts = [ ];
  var i=0;
  while (facts.length>i){
    const str = facts[i] + "!!!";
    jlfacts.push(str);
    i++
  }
  return jlfacts
}

function iLoveTheBeatles(n) {
  let arr = [];
    do {
      arr.push(`I love the Beatles!`);
      n++;
      } 
      while (n < 15);
      return arr;
}
