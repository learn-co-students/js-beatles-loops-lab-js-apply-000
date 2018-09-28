function theBeatlesPlay(musicians, instruments) {
  let result = [];
  for (let i = 0; i < musicians.length; i++) {
    const currentMusician = musicians[i];
    const currentInstrument = instruments[i];
    result.push(`${currentMusician} plays ${currentInstrument}`);
  }
  return result;
}

function johnLennonFacts(facts) {
  let result = [];
  let i = 0;
  while (i < facts.length) {
    result.push(facts[i] + '!!!');
    i++;
  }
  return result;
}

function iLoveTheBeatles(n) {
  let result = [];
  if (n < 15) {
    do {
     result.push('I love the Beatles!');
     n--;
   }
    while (n >= 0);
  } else {
    result.push('I love the Beatles!')
  }
  return result;
}


