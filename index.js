//test 1
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

var theBeatlesPlay = function(){
  var skills = []
    for (var i=0; i < musicians.length; i++){
    skills.push(musicians[i] + " " + "plays" + " " + instruments[i]);
  };
  return skills;
}
//test 2
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


var johnLennonFacts = function(facts){
var count = 0;
  var info = []
  while(count < facts.length){
    info.push(facts[count] + "!!!");
    count++;
  }
    return info;
  }


var iLoveTheBeatles = function(i){
  var shout = []
  do {
    shout.push("I love the Beatles!");
    i += 1;
  } while(i < 15);
return shout;
}
