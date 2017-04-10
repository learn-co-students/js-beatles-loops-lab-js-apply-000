function theBeatlesPlay(musicians, instruments){
  var stuff = [];

  for(var i = 0; i < musicians.length; i++){
        const sent = musicians[i] + " plays " + instruments[i];
        stuff.push(sent);
     }
  return stuff;
}



function johnLennonFacts(facts){

  var i = 0;
  var facts2 = [];

  while(i < facts.length){
    facts2.push(facts[i] + "!!!");
    i++;
  }
    return facts2;
}







function iLoveTheBeatles(n){
  var arr = [];

  do {
     arr.push("I love the Beatles!");
     n++;
 }
 while (n < 15);

  return arr;
}
