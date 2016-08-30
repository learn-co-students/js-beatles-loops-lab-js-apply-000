var theBeatlesPlay = function(musicians, instruments){
  var arr = [];
  for(var i = 0; i<musicians.length; i++){
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arr;
}

var johnLennonFacts = function(facts){
  var arr = [];
  var i = 0;
  while(i<facts.length){
    arr.push(facts[i] + `!!!`);
    i++;
  }
  return arr;
}

var iLoveTheBeatles = function(num){
  var arr = [];
  do {
    arr.push(`I love the Beatles!`);
    num += 1;
  } while(num<15);

  return arr;
}
