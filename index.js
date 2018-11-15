// add solution here

function theBeatlesPlay(musicians, instruments) {
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var beatlesLoops = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesLoops.push(musicians[i] + " plays " + instruments[i]); 
    
  }
  return beatlesLoops;
}

function johnLennonFacts(array) {
    var factsOutput = [];
    var i = 0;
    while (i < array.length) { 
      factsOutput.push(array[i] + "!!!" );
      i++;
}
    return factsOutput;
}

function iLoveTheBeatles(number) {
  var array = [];
  do 
  {
    number++;
    array.push(`I love the Beatles!`);
  }
    while (number < 15);
    return array ;
}