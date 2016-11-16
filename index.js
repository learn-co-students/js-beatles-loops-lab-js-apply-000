function theBeatlesPlay(musicians, instruments){
  var band =[];
  var string ="";

  for (var i=0; i<musicians.length; i++){
    string=musicians[i]+" plays " + instruments[i];
    band.push(string);
  }
  return band;
}

function johnLennonFacts(facts){
  for (var i=0; i<facts.length; i++){
    facts[i]=facts[i]+"!!!";
  }
  return facts;
}

function iLoveTheBeatles (number){
var love =[];

do {
  love.push("I love the Beatles!")
  number--;
}
while (number<15 && number>=0)
return love;
}
