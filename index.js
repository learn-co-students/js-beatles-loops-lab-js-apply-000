function theBeatlesPlay (musicians, instruments) {
  var length = musicians.length;
  var localArray = [];
  for (let counter = 0; counter < length; counter++) {
    localArray.push(`${musicians[counter]}` + ' plays ' + `${instruments[counter]}`)
  }
  return localArray
}

function johnLennonFacts (facts) {
  var localArray = [];
  while (localArray.length < facts.length) {
    localArray.push(`${facts[localArray.length]}` + '!!!')
  }
  return localArray;
}

function iLoveTheBeatles(num) {
  var localArray = [];
  do {
    localArray.push('I love the Beatles!');
    num++;
  } while (num < 15); 
  return localArray;
}