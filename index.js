// add solution here

function theBeatlesPlay (musicians, instruments) {
  var emptyArray = []
for (var  i=0 ; i < musicians.length; i++) {
  emptyArray.push(`${musicians[i]} plays ${instruments[i]}` )
}
return emptyArray; // remember to curly bracket close before the return function
}

function johnLennonFacts (infoArray) {
  var array = []
  for (var i = 0; i < infoArray.length; i++) {
    array.push(infoArray[i] + "!!!") //may or may not need `${} for solution
  }
  return array
}

function iLoveTheBeatles (number) {
var emptyArray0 = []
  do { 
    emptyArray0.push("I love the Beatles!");
  number++;
} while (number < 15);
return emptyArray0
}