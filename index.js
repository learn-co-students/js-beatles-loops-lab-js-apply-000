function theBeatlesPlay(musicians, instruments){
  var strArray = [];

  for(var i = 0; i < musicians.length; i++){
    strArray.push(musicians[i]+ " plays " + instruments[i]);
  }

  return strArray;
}

function johnLennonFacts(factsArray){
    var i = 0, resultsArr = [];
    
    while(i < factsArray.length){
      resultsArr.push(factsArray[i] + "!!!");
      i++
    }

    return resultsArr;
}

function iLoveTheBeatles(num){
  var love = [];

  do{
    love.push("I love the Beatles!");
    num++;
  } while(15 > num)

  return love;
}