function theBeatlesPlay(musicians, instruments) {
  var myarray = [];
  for (var i=0; i < musicians.length; i++) {
    myarray.push(musicians[i] + ' plays ' + instruments[i]);
      }
      return myarray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  
  function johnLennonFacts(facts) {
    var results = [];
    var count = 0;
    while (count < facts.length) {
      results.push(facts[count] + "!!!");
      count++;
    }
    return results;
  }

function iLoveTheBeatles(x) {
  var myarray = [];
  do {
    myarray.push("I love the Beatles!");
    x++;
  }
  while (x < 15);
return myarray;
}