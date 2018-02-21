function theBeatlesPlay (musicians, instruments) {
  var statements = [];
  for (var i = 0; i < musicians.length; i++) {
    statements.push(musicians[i] + " plays " + instruments[i])
  }
  return statements;
}

function johnLennonFacts(arr){
  const factsWithBang = [];
  var i = 0
  while (i < arr.length) {
    factsWithBang.push(arr[i] + "!!!")
    i++;
  }
  return factsWithBang
}

function iLoveTheBeatles(num){
  var statements = [];
  do {
    statements.push("I love the Beatles!");
    num++
  } while (num < 15);
  return statements;
}
