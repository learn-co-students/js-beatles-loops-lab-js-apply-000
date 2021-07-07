function theBeatlesPlay(musicians, instruments) {
var newArray = [];

for (var i = 0; i < musicians.length; i++) {  
  var string = `${musicians[i]} plays ${instruments[i]}` 
  newArray.push(string)
  
  }
  return newArray;
} 


function johnLennonFacts(string) {
  var newArray = [];
  
  let i = 0;
  while (i < string.length) {
    newArray.push(`${string[i]}!!!`)
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var newArray = [];
  do {
    newArray.push('I love the Beatles!')
    num++
  } while (num < 15);
  return newArray;
}  
// add solution here
