const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var i=0; i<musicians.length; i++){
    array.push(musicians[i]+" plays "+ instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var array = [];
  var len = facts.length;
  var i=0;
  while(i < len){
    array.push(facts[i]+"!!!");
    i++;
  }
  return array;
}

function iLoveTheBeatles(number){
  var array = [];
  var i = 0;
  if(number >= 15){
    array.push("I love the Beatles!");
  }
  if(number < 15){
    do {
        array.push("I love the Beatles!");
        i++;
    }
    while (i <= number);
  }
  return array;
}

iLoveTheBeatles(7);

johnLennonFacts(facts);
//johnLennonFacts(["foo",,"bar"]);
