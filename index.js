// add solution here

var pairs = [];
function theBeatlesPlay(musician, instrument){

  var i;
  for(i = 0; i < musician.length; i++){
    pairs[i] = musician[i] + " plays " + instrument[i];

  }
  return pairs;
}

function johnLennonFacts(facts){

  var exc = [];

  for (var i = 0; i < facts.length; i++) {
    exc[i] = facts[i] + "!!!";
  }
  return exc;
}

function iLoveTheBeatles(num){
  var adore = [];
  var counter = 0;
  do {

    adore[counter] = "I love the Beatles!";
    counter++;
    num++;

  } while (num < 15);

  return adore;
}
