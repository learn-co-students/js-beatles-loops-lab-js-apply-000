function theBeatlesPlay(musicians, instruments) {
  const temp = [];

  for(let index = 0; index < musicians.length; index++) {
    const musician = musicians[index];
    const instrument = instruments[index];

    temp.push(`${musician} plays ${instrument}`);
  }

  return temp;
}

function johnLennonFacts(johnLennonFacts) {
  const temp = [];
  let index = 0;

  while (index < johnLennonFacts.length) {
    const johnLennonFact = johnLennonFacts[index];

    temp.push(`${johnLennonFact}!!!`);

    index++;
  }

  return temp;
}

function iLoveTheBeatles(number) {
  const temp = [];

  do {
    temp.push('I love the Beatles!');
    number++;
  } while (number < 15);

  return temp;
}
