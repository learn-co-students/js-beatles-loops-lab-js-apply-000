// add solution here
function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for(var i = 0; i < musicians.length && i < instruments.length; i++){
    var newString = `${musicians[i]} plays ${instruments[i]}`;
    newArray.push(newString);
  }
  return newArray;
}
function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    var excited = '!!!';
    facts[i] = facts[i] + excited;
    i++;
   }
   return facts; 
}

function iLoveTheBeatles(num){
var loveArray = [];
var i = 0;
if ( num < 15)
var newNum =  15 - num;
do {
  var saying = "I love the Beatles!";
  loveArray.push(saying);
  i++;
}
  while (i < newNum);
  return loveArray;
}