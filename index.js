var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians, instruments){
  var list = [];
  for(var i = 0; i < musicians.length; i++){
    var musician = musicians[i];
    var instrument = instruments[i];
    var sentence = musician + " plays " + instrument;
    list.push(sentence);
  }
  return list;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var newList = [];
  var i = 0;
  while(newList.length < facts.length){
    newList.push(facts[i] + "!!!");
    i++;
  }
  return newList;
}

function iLoveTheBeatles(number){
  var list = [];
  var i = number;
  
  do{
    i += 1;
    list.push("I love the Beatles!");
  } while(i < 15);
  return list;
}