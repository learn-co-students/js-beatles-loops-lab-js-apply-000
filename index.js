// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(let i=0; i < musicians.length; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`;
    array.push(string);
  } return array;
}
function johnLennonFacts(facts) {
  var newArray = []
  var i = 0
  while(i<facts.length) {
    newArray.push(`${facts[i]}!!!`)
    i++
  } return newArray
}
function iLoveTheBeatles(n) {
  var newArray = []; 
  do { newArray.push("I love the Beatles!");
  n++}
  while(n < 15);
  return newArray;
}
