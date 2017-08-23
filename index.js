function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (var i = 0; i < musicians.length; i += 1) {
    var M = musicians[i];
    var I = instruments[i];
    var sentence = M + " plays " + I;
    result.push(sentence);
  }
  return result;
}


function johnLennonFacts(knowledge) {
  var i = 0;
  var result = [];
  while(i < knowledge.length) {
    var ele = knowledge[i];
    result.push(ele + "!!!");
    i++;
   }
   return result;
}

function iLoveTheBeatles(num) {
  var result = [];
  do{
    result.push("I love the Beatles!");
    num += 1;
  } while(num < 15);
  return result;
}
