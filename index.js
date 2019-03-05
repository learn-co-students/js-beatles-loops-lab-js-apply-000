// add solution here
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    emptyArray.push(string);
  }
  return emptyArray;
}

var facts = ["He was the last Beatle to learn to drive", 
             "He was never a vegetarian",
             "He was a choir boy and boy scout",
             "He hated the sound of his own voice" ];

function johnLennonFacts(facts) {
  var i = 0;
  while ( i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
return facts;
}

function iLoveTheBeatles(num) {
  var eArray = [];
  do { 
    eArray.push("I love the Beatles!");
    num++;
} while ( num < 15 );
return eArray;
}