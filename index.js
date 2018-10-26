// add solution here

//var musician = [John, Paul, George];
//var instrument = [Guitar, Piano, Drums];
/*
function theBeatlesPlay (musician, instrument) {
  var playMusic = [];
  for (var i= 0; i<musician.length; i++) {
  
   playMusic.push(musican[i] + " plays " + instrument[i]);}
   return playMusic
}

*/

function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (var i =0; i <musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array;
}

//-----
function johnLennonFacts() {
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  var otherFacts = [];
  var i = 0;
  while (otherFacts.length < facts.length) {
    otherFacts.push(facts[i] + "!!!")
    i++;
  }
  return otherFacts; 
  }
  
  //--------
  function iLoveTheBeatles(number) {
    var emptyArray = [];
    do {emptyArray.push("I love the Beatles!"); 
    number++;}
    while (number < 15);
    return emptyArray;
    }
  
  