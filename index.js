let beatlesArray = [];
//musicians.forEach(theBeatlesPlay);
function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < 4; i++) {
    beatlesArray.push(`${musicians.shift()} plays ${instruments.shift()}`);
  }
return beatlesArray;
}
theBeatlesPlay()



// 2 johnLennonFacts
function johnLennonFacts(facts) {
  let i = 0;
  while (i <= facts.length - 1) {
    facts[i] += '!!!';
    i++;
  }
  return facts;
}

johnLennonFacts(facts);


// 3 iLoveTheBeatles
function iLoveTheBeatles(i) {
  let result = [];
  do {
    i += 1;
    result.push('I love the Beatles!')
  } while (i < 15);

  return result;
}

iLoveTheBeatles()
