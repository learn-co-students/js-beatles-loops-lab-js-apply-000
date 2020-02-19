
function theBeatlesPlay(musicians, instruments){
  var empty =[];
  for (var i = 0; i < musicians.length; i++){
    var str = musicians[i] + " plays " + instruments[i];
    empty.push(str)
  }
return empty
}

function johnLennonFacts(facts){
  var empty = [];
  for (var i = 0; i < facts.length; i++){
    var str = facts[i] + "!!!";
    empty.push(str)
  }
  return empty
}

function iLoveTheBeatles(number){
  var empty =[]
  do
{
  var str = "I love the Beatles!";
  empty.push(str);
  number++;
}
while (number < 15); 
return empty
}