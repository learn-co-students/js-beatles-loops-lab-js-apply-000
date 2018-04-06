function theBeatlesPlay (musicians, instruments){
  var arr = []
  for(let i = 0; i < musicians.length; i++){
    let str = musicians[i] + " plays " + instruments[i];
    arr.push(str)
  }
  return arr;
}

function johnLennonFacts(facts){
  var results = [];
  var n = 0;
  while (n < facts.length){
    results.push(facts[n] + "!!!");
    n++;
  }
  return results;
}


function iLoveTheBeatles(num){
  var arr = [];
  do {
    arr.push("I love the Beatles!")
    num++
  } while (num < 15);
  return arr;
}
