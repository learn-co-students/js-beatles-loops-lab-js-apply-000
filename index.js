// add solution here
function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];

  for (var i = 0; i < musicians.length; i++){
      emptyArray.push(musicians[i] +  "plays" +instruments[i]);
  }
  return emptyArray;
}

function johnLennonFacts(facts){
  var emptyArray = [];
  var i = 0;
  while (i < facts.length){
    emptyArray.push('${facts[i] + "!!!"}');
    i = i+1;

  }
  return emptyArray;
}

function iLoveTheBeatles(num){
  var emptyArray = [];
  var i = num;
  do {
    array.push("I love the Beatles!");
    num = num + 1;
  }
  while (num < 15);
  return emptyArray;
}
