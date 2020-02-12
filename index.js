var theBeatlesPlay = function() {
  var fabFour = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var comeTogether = [];
  for (var i = 0; i < fabFour.length; i++) {
    comeTogether.push(fabFour[i] + " plays " + instruments[i]);
  }
  return comeTogether;
};

var facts = [];
var johnLennonFacts = function(facts) {
  var i = 0;
    while (i < facts.length) {
       facts[i] += "!!!";
     i++;
    }
    return (facts);
  };

var i = 0;
var n = 0;
var iLoveTheBeatles = function(n) {
  var superFan = [];
  do {
    superFan.push ("I love the Beatles!");
    i++;
  }
  while ((n < 15) && (i < (15 - n)));
  return superFan;
};