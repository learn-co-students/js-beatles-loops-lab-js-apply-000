var theBeatlesPlay = function(musicians, instruments){
  var arr = [];
  for(var i = 0; i < musicians.length; i++){
    var string = musicians[i] + " plays " + instruments[i];
    arr.push(string);
  }
  return arr;
}

var johnLennonFacts = function(facts){
  var c = 0;
  var newarr = [];
  while(c < facts.length){
    var string = facts[c] + "!!!";
    newarr.push(string);
    c++;
  }
  return newarr;
}

var iLoveTheBeatles = function(number){
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  } while(number<15);
  return arr;
}
