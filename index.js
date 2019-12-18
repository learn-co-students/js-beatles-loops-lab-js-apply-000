// add solution here
function theBeatlesPlay(musicians, instruments){
  var empty = [];
  for(var i = 0; i < musicians.length; i++){
    var value1 = musicians[i];
    var value2 = instruments[i];
    empty.push(""+value1+" plays "+value2+"");
  }
  return empty;
} 

function johnLennonFacts(facts){
  var empty = [];
  var index = 0;
  while(index < facts.length){
    empty.push(facts[index] + "!!!");
    index++;
  }
  return empty;
}

function iLoveTheBeatles(number){
  var empty = [];
  var text = "I love the Beatles!";
  var i = number;
  do{
    i = i + 1;
    empty.push(text);
  }
  while(i<15);
  return empty;
}