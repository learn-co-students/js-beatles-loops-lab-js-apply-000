var theBeatlesPlay = function(musicians, instruments) {
  let result = [];
  for (let i = 0; i < musicians.length; i++) {
    const currentMusician = musicians[i];
    const currentInstrument = instruments[i];
    result.push(`${currentMusician} plays ${currentInstrument}`);
  }
  return result;
}

const johnLennonFacts = function(arrOfFacts) {
  let result = [];
  let i = 0;
  while (i < arrOfFacts.length) {
    result.push(arrOfFacts[i] + '!!!');
    i++;
  }
  return result;
}

const iLoveTheBeatles = function(n) {
  let result = [];
  if (n < 15) {
    do {
      result.push('I love the Beatles!');
      n--;
    } while (n >= 0);
  } else {
    result.push('I love the Beatles!');
  }
  return result;
}


