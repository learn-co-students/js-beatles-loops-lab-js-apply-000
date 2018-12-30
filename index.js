function theBeatlesPlay(p1,p2){
var result=[];
  for (var i=0;i<p1.length;i++){
    result.push(p1[i] + ' plays ' + p2[i])
  }
  return result;
}

function johnLennonFacts(pfacts){
var counter = 0, result=[];
while (counter< pfacts.length){
  result.push(pfacts[counter]+'!!!');
  counter++;
}
return result;
}

function iLoveTheBeatles (num){
  var i=0,result = [];
  do{
    result.push("I love the Beatles!");
    num++;
  }
  while(num < 15) ;
  return result;
}
