// add solution here
function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for (var i = 0; i < musicians.length; i++){
    var str = musicians[i] + " plays " + instruments[i];
    newArr[i] = str;
  }
  return newArr;
}

function johnLennonFacts(facts){
var count = 0;
var arr=[];
while (count < facts.length){
arr.push(`${facts[count]}` + "!!!");
count++;
}
return arr;
}


function iLoveTheBeatles(n){
var arr=[];
do{
  n++;
  arr.push("I love the Beatles!")
} while (n < 15);
return arr;
}
