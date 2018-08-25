// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const array = [];
const facts = ["He was the last Beatle to learn to drive",
               "He was never a vegetarian",
               "He was a choir boy and boy scout",
               "He hated the sound of his own voice"];

function theBeatlesPlay(musicians, instruments){
  for (var i = 0; i < musicians.length; i++){
  array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var array2 = [];
  let i = 0;
  while (i < facts.length){
  array2.push(facts[i] + "!!!");
  i++;
  }
  return array2;
}

function iLoveTheBeatles(n){
  var array3 = [];
  do{
    array3.push("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return array3;
;  
}