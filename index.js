function theBeatlesPlay(musicians, instruments) {
  var empty = new Array(musicians.length);

  for (var i = 0; i<musicians.length; i++){
    empty[i] = musicians[i] + " plays " + instruments[i];
  }
  return empty
}

function johnLennonFacts(facts){
var j = 0;

while (j<facts.length){
  facts[j] += "!!!";
  j++;
}
return facts;
}

function iLoveTheBeatles(number){
if(number > 15)
{
  return "I love the Beatles!";
}
else {
  var text = new Array(14-number);
  var i = 0;

  do {
      text[i] = "I love the Beatles!";
      number++;
      i++;
  }
  while (number < 15);
  return text;
}
}
