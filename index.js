function theBeatlesPlay(musicians, instruments){
  var emptyArray=[]
  for(var i=0; i<musicians.length;i++){
    var string= `${musicians[i]} plays ${instruments[i]}`
    emptyArray.push(string);
  }
  return emptyArray;
}

function johnLennonFacts(facts) {
  var finalArray=[]
  for (var i=0; i<facts.length;i++){
    var string= `${facts[i]}!!!`;
    finalArray.push(string);
  }
return finalArray;
}

function iLoveTheBeatles(number){
var finalArray=[]
    do{
      var string= "I love the Beatles!";
      finalArray.push(string);
      number++
    }
    while(number<15);
    return finalArray;
  }
