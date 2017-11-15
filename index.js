function theBeatlesPlay(musicians,instruments) {
  const beatles=[];
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatles;
}
function johnLennonFacts(facts) {
  const factexclaim = [];
  let i = 0;
  while (i < facts.length) {
    factexclaim.push(`${facts[i]}!!!`);
    i++;
  }
  return factexclaim;
}
function iLoveTheBeatles(times) {
    let howManyTimes = [];
    do {
      howManyTimes.push('I love the Beatles!');
      times++;
    } while (times<15);
    return howManyTimes;
}
