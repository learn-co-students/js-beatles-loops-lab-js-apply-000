// add solution here
var theBeatlesPlay = function(musician, instrument) {
  var arr = [];
  for (var i = 0; i < musician.length; i++){
   var action = (musician[i] + " plays " + instrument[i]);
   arr[i] = (action);
  }
  console.log(arr);
  return arr;
}

var johnLennonFacts = function(facts) {
  var n = 0;
  while (n < facts.length){
    facts[n] = (facts[n] + "!!!");
    n++;
  }
  console.log(facts);
  return facts;
}

var iLoveTheBeatles = function(number) {
 var statement = [];
 var j = 0;
 if (number === 17){
   statement[j] = ('I love the Beatles!')
 } 
 else {
 do {
   statement[j] = ('I love the Beatles!')
   j++;
 } while (j <= number);
 }
console.log(statement);
return (statement);
}


