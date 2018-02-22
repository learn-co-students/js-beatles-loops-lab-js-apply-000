function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}
function johnLennonFacts (facts){
var newfacts = [];
var i = 0;
while (i < facts.length) {
  newfacts.push(`${facts[i]}!!!`);
  i++;
}
return newfacts;
}

function iLoveTheBeatles (num){
  var number=[];
  var i = 0
  do {
   number.push("I love the Beatles!"); 
   num++;
  }
  while (num < 15);
return number
}