function theBeatlesPlay (musicians, instruments) {
  var musicianPlays = [];
  
  for (let i = 0; i < musicians.length; ++i) {
    
    musicianPlays.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return musicianPlays;
}

function iLoveTheBeatles (num) {
  const store = [];
  do {
    store.push('I love the Beatles!');
    num += 1;
  } while (num < 15);
  
  return store;
}


function johnLennonFacts(facts) {
  `Refer back to solutions`;
  const arr = [];

  let i = 0;
  while (i < facts.length) {
    arr.push(`${facts[i]}!!!`);
    i += 1;
  }

  return arr;
}