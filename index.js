var arr1 = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Star"];
var arr2 = ["guitar", "guitar", "bass", "drums"]
var arr3 = [];
function theBeatlesPlay(arr1, arr2){

  for (var i = 0; i < arr1.length; i++){
    arr3.push(arr1[i] + " plays " + arr2[i]);
  }
  return arr3;
}

const facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var exclame = "!!!";
  var runThrough = 0;
  while (runThrough < facts.length){
    facts[runThrough] += exclame;
    runThrough++;
  }
  return facts;
}

function iLoveTheBeatles(arg){
  var sarcasm = "I love the Beatles!";
  var arr = [];
  if (arg > 15) {return sarcasm} else {
    for (var i = 0; i <= arg; i++){
      arr[i] = sarcasm;
    }
    return arr;
  }
}
