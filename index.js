function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (var i = 0; i < musicians.length; i += 1) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(array) {
  var excitedFacts = [];
  var i = 0
  while (i < array.length) {
    excitedFacts.push(array[i] + "!!!");
  i += 1;
  }
  return excitedFacts;
}

function iLoveTheBeatles(num) {
   var array = [];
   do {
     array.push("I love the Beatles!");
     num += 1;
   } while (num < 15);
   return array;
}
