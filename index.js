function theBeatlesPlay(musicians,instruments){
  var results = [];
  for(var i = 0; i < musicians.length; i++){
    var str = musicians[i] +" plays " + instruments[i];
    results.push(str);
  }
  return results;
}

function johnLennonFacts(facts){
  var i = 0;
  var results = [];
  while(i < facts.length){
    var str = facts[i]+"!!!";
    results.push(str);
    i++
  }
  return results;
}

function iLoveTheBeatles(num){
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return array;
}
