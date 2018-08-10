// add solution here
var musicians = ["John Lennon","Paul McCartney", "Ringo Star","George Harrison"];

var instruments= ["Guitar","Guitar","Drums","Bass"];

function theBeatlesPlay(mus,inst){
  var band=[];
  for (var i = 0; i < mus.length; i++) {
    band.push(mus[i] + " plays " + inst[i] )
    
  }
  return band;
}


theBeatlesPlay(musicinas, instruments);

const facts= [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var i = 0;
  var factArray = [];
  while (i < facts.length){
    factArray.push(facts[i] + "!!!");
    i++
  }
  return factArray;
}

johnLennonFacts(facts);

function iLoveTheBeatles(number){
  var empty=[];
  var i = number;
  do{
    empty.push("I love the Beatles!");
    i++;
  }
  while(
  
    i < 15
    );
    return empty;
}

























