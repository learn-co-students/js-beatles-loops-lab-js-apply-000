// add solution here

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  var i;
  for (i=0; i< 4; i++){
    emptyArray.push(musicians[i]+" plays "+instruments[i]);
  }
  return emptyArray;
}


function johnLennonFacts(fact) {
  var emptyArray2 = [];
  var i =0;
  var whileLength = fact.length
  while (i < whileLength) {
    emptyArray2.push(fact[i]+"!!!");
    i++;
  }
  return emptyArray2;
}

function iLoveTheBeatles(x) {
  var emptyArray3 = [];
  do {
    emptyArray3.push('I love the Beatles!');
    x++;
  }
  while (x <15);
  return emptyArray3
}
