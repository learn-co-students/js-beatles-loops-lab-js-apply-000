const theBeatlesPlay = (musicians, instruments) => {
  let beatlesArr = [];
  for (let i = 0; i < musicians.length; i++) {
        beatlesArr.push(musicians[i] + ' plays ' + instruments[i]);
      }
  return beatlesArr
  }

const johnLennonFacts = facts => {
  let j = 0;
  let wowFacts = [];
  while (j < facts.length) {
    wowFacts.push(facts[j] + '!!!');
    ++j;
  }
  return wowFacts;
}

function iLoveTheBeatles(num) {
    let love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
}
