// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  for (var i = 0; i < musicians.length; i++) {
  array.push(musicians[i] + " plays " + instruments[i]);
}
return array;
}

function johnLennonFacts(facts) {
  var array2 = []
  var i = 0;
  while (i < facts.length) {
  array2.push(facts[i] + "!!!");
  i++
}
return array2;
}

function iLoveTheBeatles(number) {
  var array3 = [];
do {
    array3.push("I love the Beatles!");
    number++
  }
  while (number < 15);
return array3;
}
