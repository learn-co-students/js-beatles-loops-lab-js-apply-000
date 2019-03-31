// add solution here
ffunction theBeatlesPlay(instruments, musicians){
  var array = [];

  for(var i = 0; i < musicians.length; i++){
    var string = musicians[i] + ' plays ' + instruments[i];
    array.push(string);
  }
}

function johnLennonFacts(facts){
  var array = [];

  for(var i = 0; i < facts.length; i++){
     var string = facts[i] + '!!!';
     array.push(string);
  }
  return array;
}
