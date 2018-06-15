function theBeatlesPlay(musicians,instruments){
  var emptyArr = [];
  for (let i = 0; i < musicians.length; i++) {
    var newSentence = musicians[i] + " plays " + instruments[i];
    emptyArr.push(newSentence);
  }
return emptyArr;
}

function johnLennonFacts(facts){
  let newArray = [];
  var i = 0;
  while (i < facts.length) {
    newArray.push(facts[i] + "!!!");
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(num){
  let result = [];
   do {
    result.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return result;
}