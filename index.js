function theBeatlesPlay(musicians, instruments){
  var arrayOfStrings = [];
  var str = ""
  for(var i = 0; i < musicians.length; i++){
    str = musicians[i] + " plays " + instruments[i]
    arrayOfStrings.push(str)
  }
  return arrayOfStrings;
}

function johnLennonFacts(facts){
  var arrayOfStrings = [];
  var str = "";
  var i = 0;
  while(i < facts.length){
    str = facts[i] + "!!!"
    arrayOfStrings.push(str)
    i++
  }
  return arrayOfStrings;
}

function iLoveTheBeatles(num){
  var arrayOfStrings = [];
  do{
    arrayOfStrings.push("I love the Beatles!");
    num++
  }while(num < 15);
  return arrayOfStrings;
}
