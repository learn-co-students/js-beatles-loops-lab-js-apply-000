// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for(var i = 0; i < musicians.length && i < instruments.length; i++) {
    var newString = `${musicians[i]} plays ${instruments[i]}`;
    newArray.push(newString);
  }
  return newArray;
}
// alternative solution: instead of storing newString variable, could push the interpolated string directly into newArray.

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    var excited = '!!!';
    facts[i] = facts[i] + excited;
    i++;
   }
   return facts; 
}

/* alternative solution: 
function johnLennonFacts(facts) {
  var excitedArray = [];
  var i = 0;
  while (i < facts.length){
    excitedArray.push(facts[i] + "!!!");
    i++;
  }
  return excitedArray;
}
*/

function iLoveTheBeatles(num){
  var loveArray = [];
  var i = 0;
  if ( num < 15) {
    var newNum =  15 - num;
  }
  do {
    var saying = "I love the Beatles!";
    loveArray.push(saying);
    i++;
  }
  while (i < newNum);
  return loveArray;
} 

/* alternative solution:
function iLoveTheBeatles(num) {
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return loveArray;
}
*/