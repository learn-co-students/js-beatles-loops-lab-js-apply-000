function theBeatlesPlay (musicians, instruments) {
  var mLen, musicianString;
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var musicianInstrument = [];
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  for(var i=0; i<musicians.length; i++){
musicianString = musicians[i] + ' plays ' + instruments[i];
musicianInstrument[i]=musicianString;
}
return musicianInstrument;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts (facts){
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
    } 
    return facts;
}

function iLoveTheBeatles (n) {
  var strings=[];
  do {
  n++;
  strings.push ('I love the Beatles!');
} while (n < 15);

return strings;
}

