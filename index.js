function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i])
  }
  return arr;
}

function johnLennonFacts(facts) {
  let n = 0;
  let arr1 = [];
  while (n < facts.length) {
    arr1.push(facts[n] + "!!!")
    n++;
  }
  return arr1;
}

function iLoveTheBeatles(num) {
  var arr2 = [];
  var i = 0;
  
  do {
    arr2.push("I love the Beatles!")
    i++;
  } while (i < 15 - num)
  
  return arr2;
}