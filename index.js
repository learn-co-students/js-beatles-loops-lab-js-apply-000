function theBeatlesPlay(musicians, instruments) {
  var bandmates = [];
  for (let i = 0; i < 4; i++) {
     bandmates.push(`${musicians[i]} plays ${instruments[i]}`);
   }
   return bandmates;
}

function johnLennonFacts(johnLennonFacts){
  var text = [];
  var i = 0;
  while(i < johnLennonFacts.length){
    text.push(johnLennonFacts[i] + "!!!");
    i++;
  }
  return text;
}

function iLoveTheBeatles(number){
  var combinedtext = [];
    do{
      combinedtext.push("I love the Beatles!");
        number++;
      }while(number < 15);

      return combinedtext;
}
