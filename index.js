const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var music = [];
  for (var i = 0; i < musicians.length; i++){
    music.push(musicians[i] + " plays " + instruments[i]);
  }
  return music;
};

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts){
var constent = 0;
var newVar = [];
  while (constent < facts.length){
    newVar.push(facts[constent]+ "!!!");

  constent++;
  }
  return newVar;
};


function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
}
