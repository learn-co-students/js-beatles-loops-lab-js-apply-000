// const facts = [
//   "He was the last Beatle to learn to drive",
//   "He was never a vegetarian",
//   "He was a choir boy and boy scout",
//   "He hated the sound of his own voice"
// ];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}


function johnLennonFacts(facts) {
  
  var j = 0;
    while (j < facts.length) {
      facts[j] = facts [j] + "!!!";
      j++;
    }
return facts;
  
}

function iLoveTheBeatles(n) {
  var array = [];
  
  do{
    array.push("I love the Beatles!");
    n--;
  } while (n>=0 && n < 15)
  return array;
}
