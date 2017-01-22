var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


var theBeatlesPlay = function(musicians,instruments) {

     var mylist = [];


        for (var i = 0; i < musicians.length; i++) {


                 mylist.push(musicians[i] + " " +"plays" + " "+ instruments[i]);


                   }
return mylist;

};

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var johnLennonFacts = function(facts) {
  var mylist = [];
for (var i = 0; i < facts.length; i++){
  mylist.push(facts[i] + "!!!");
}
return mylist;
};

function iLoveTheBeatles (int) {
  var bb = [];
  do {
    bb.push("I love the Beatles!");
    int++
  }
  while (int<15);
  return bb;
}
