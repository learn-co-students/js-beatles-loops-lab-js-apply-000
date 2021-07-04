const theBeatlesPlay = (musicians,instruments) => {
  let itBe = [];
  for (let i = 0; i < musicians.length; i++) {
   itBe.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return itBe;
}

const johnLennonFacts = facts => {
  let i = 0;
  let excitedFacts = [];
  while (i < facts.length) {
    excitedFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return excitedFacts;
}

const iLoveTheBeatles = num => {
  let array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return array;
}

