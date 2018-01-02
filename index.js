function theBeatlesPlay(musicians, instruments) {
  let plays = [];
  console.assert(musicians.length == instruments.length, "Must be the same length!")
  for(let count = 0; count < musicians.length; count++) {
    plays[count] = musicians[count] + ' plays ' + instruments[count]
  }
  return plays;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  for(let count = 0; count < facts.length; count++) {
    facts[count] += '!!!'
  }
  return facts
}

function iLoveTheBeatles(number) {
  let praise = []
  do {
    praise.push("I love the Beatles!")
    number++
  } while (  number < 15 )
  return praise
}
