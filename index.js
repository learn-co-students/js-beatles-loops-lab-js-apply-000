// add solution here

function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for(var n=0; n< musicians.length; n++) {
    beatles[n] = musicians[n] + " plays " + instruments[n];
  }
  return beatles;
}


function johnLennonFacts(factarray) {
  var n = 0;
  var excitedfacts = [];
  while (n < factarray.length) {
    excitedfacts[n] = factarray[n] + "!!!";
    n++;
  }
  return excitedfacts;
}

function iLoveTheBeatles(number) {
  var beatlesarray = [];
  do {
    beatlesarray.push("I love the Beatles!");
    number++;
  }
  while (number<15);
  return beatlesarray;
}