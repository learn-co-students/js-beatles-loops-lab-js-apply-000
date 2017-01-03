

var musicians = [
   "John Lennon",
   "Paul McCartney",
   "Ringo Starr",
   "George Harrison",
];

var instruments = [
  "Guitar",
  "Bass Guitar",
  "Drums",
  "Lead Guitar",
];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i<musicians.length; i++){
    array.push(musicians[i]+" plays "+instruments[i]);
  }
    return array;
}

function johnLennonFacts(facts){
  var array = [];
  var i = 0;
  while(i<facts.length){
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}

function iLoveTheBeatles(i){
  var array = [];
  do{
    array.push("I love the Beatles!");
    i++;
}  while (i<15);

  return array;

}
