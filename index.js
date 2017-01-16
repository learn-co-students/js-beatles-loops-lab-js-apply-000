/*const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
musicians.toString();
instruments.toString();

function theBeatlesPlay(musicians, instruments) {
  var t = [];
  var play;
  for (t = 0; t < 12; t++) {
    play = musicians[t] + " plays " + instruments[t];
  }
  for (t = 1; t < 12; t++) {
    play = musicians[t] + " plays " + instruments[t];
    play += ", " + musicians[t] + " plays " + instruments[t];
    play += ", " + musicians[t] + " plays " + instruments[t];
  }
  return play;
}*/
function theBeatlesPlay(musicians,instruments) {
  var output = [];
  for (var x = 0; x<4; x++) {
    output[x] = musicians[x] + " plays " + instruments[x];
  }
  return output;
}

theBeatlesPlay(["John Lennon","Paul McCartney","Ringo Starr","George Harrison"],["rhythm guitar","bass guitar","drums","lead guitar"])

/*function johnLennonFacts() {
  const facts1 = [
  facts[0] = "He was the last Beatle to learn to drive",
  facts[1] = "He was never a vegetarian",
  facts[2] = "He was a choir boy and boy scout",
  facts[3] = "He hated the sound of his own voice"
  ];
  var i = [];
  var textFact;
  while (facts[i]) {
    return facts[facts.length] = facts[0] + '!!!';
    return facts[facts.length] = facts[1] + '!!!';
    return facts[facts.length] = facts[2] + '!!!';
    return facts[facts.length] = facts[3] + '!!!';
  }
}*/
var facts = ['He was the last Beatle to learn to drive','He was never a vegetarian','He was a choir boy and boy scout','He hated the sound of his own voice'];
function johnLennonFacts(facts){
  var john = [];
  var i = 0;
  while (i < facts.length){
    john.push(facts[i] + '!!!');
    i++;
  }
  return john;
}

function iLoveTheBeatles (int){
  var lB = [];
  do {
    lB.push('I love the Beatles!');
    int++;
  }
    while (int < 15);
  return lB;
}
