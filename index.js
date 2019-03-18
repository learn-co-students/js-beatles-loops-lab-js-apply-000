// add solution here

var arr = []

function theBeatlesPlay (musicians,instruments) {
  for (let i = 0; i < musicians.length; i++) {

  arr.push(musicians[i] + " plays " + instruments[i])}
 

  return arr
}

function johnLennonFacts(facts) {
  let i = 0;
  let arr2 = [];
  while (i < facts.length) {
    arr2.push(facts[i] + "!!!");
    i++;
}
  return arr2
}

function iLoveTheBeatles (number) {
  var arr3 = []
  let i = number
do {
  arr3.push("I love the Beatles!");
  i++;
}
while (i < 15) ;
return arr3
}
