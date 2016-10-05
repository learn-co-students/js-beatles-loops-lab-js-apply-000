const mus = [ "John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instr = ["Vocals", "Bass", "Guitar", "Drums"];
const factos = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var theBeatlesPlay = function(mus, instr) {
  var arr = [];
  for (var i = 0; i <4; i ++) {
    arr.push(mus[i]+" plays "+instr[i]);
  }
  return arr;
}

theBeatlesPlay(mus,instr);

var johnLennonFacts = function(factos) {
  var facts = []
  for (var i = 0; i<factos.length; i ++) {
    facts.push(factos[i]+"!!!");
  }
  return facts;
}

johnLennonFacts(factos);


var iLoveTheBeatles = function(num) {
  var loving = ["I love the Beatles!"];
  var counter = 0;
  if (num >15) {
    return loving;
  }
  while (counter <num) {
    loving.push("I love the Beatles!");
    counter +=1;
  }
  return loving;
}

iLoveTheBeatles(5);
