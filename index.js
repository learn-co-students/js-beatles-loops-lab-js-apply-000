function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var newArr = [];
  var i = 0;
  while (i < facts.length) {
    newArr.push(facts[i] + '!!!');
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(number) {
  let beatlesArray = [];
  do {
    beatlesArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return beatlesArray;
}
