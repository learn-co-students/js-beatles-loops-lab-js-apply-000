function theBeatlesPlay(musicians, instruments) {
  let result = [];
  for (let i = 0; i < musicians.length; i++) {
    const currentMusician = musicians[i];
    const currentIstrument = instruments[i];
    result.push(`${currentMusician} plays ${currentIstrument}`);
  }
  return result;
}

function johnLennonFacts(arrOfFacts) {
  let result = [];
  let i = 0;
  while (i < arrOfFacts.length) {
    const currentFact = arrOfFacts[i];
    result.push(currentFact + '!!!');
    i++;
  }
  return result;
}

function iLoveTheBeatles(n) {
  let result = [];
  if (n < 15) {
    do {
      result.push('I love the Beatles!');
    }
    while (result.length <= n);
  } else {
    result.push('I love the Beatles!');
  }
  return result;
}
