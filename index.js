const theBeatlesPlay = (musicians, instruments) => {
  let intro = [];

  for (let i = 0; i < musicians.length; i += 1) {
    intro.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return intro;
};

const johnLennonFacts = facts => {
  // Should this be mutating or non-mutating? :/
  for (let i = 0; i < facts.length; i += 1) {
    facts[i] = facts[i] + '!!!';
  }

  return facts;
};

const iLoveTheBeatles = number => {
  let love = [];

  do {
    love.push('I love the Beatles!');
    number += 1;
  } while (number < 15);

  return love;
};
