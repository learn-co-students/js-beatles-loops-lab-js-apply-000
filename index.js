function theBeatlesPlay(musicians, instruments){
  var emptyArr = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return emptyArr;
}

function johnLennonFacts(facts){
  var fac = [];
  var i = 0;
  while (i < facts.length) {
    fac.push(facts[i] + "!!!");
    i++;
  }
  return fac;
}


function iLoveTheBeatles(num){
  var emptyArr =[];
  do {
    emptyArr.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return emptyArr;
}
