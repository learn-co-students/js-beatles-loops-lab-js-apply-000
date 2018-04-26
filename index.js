function theBeatlesPlay(musicians, instruments) {
  var returnArr = [];
  for(let i = 0; i < musicians.length; i++) {
    returnArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
console.log(returnArr)
return returnArr
}

function johnLennonFacts(array) {
  var facts = [];
  let i = 0;
  while(i < array.length) {
    facts.push(array[i] + `!!!`)
    i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var array = [];

do {
    array.push('I love the Beatles!')
    number++;
}
while (number < 15);
return array
}