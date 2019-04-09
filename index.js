// add solution here

var musicians = ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"];
var instruments = ["Guitar", "Bass GUitar", "Drums", "Lead Guitar"];


function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < 4; i++) {
        array.push(musicians[i] + " plays " + instruments[i])
      }
      return array
}

function johnLennonFacts(facts) {
  var facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice',
  ];
var array = [];
let i = 0;
while (i < 4) {
  array.push(facts[i] + "!!!")
  i++
}
return array
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
  array.push("I love the Beatles!")
  number ++
}
while (number < 15)
return array
}
