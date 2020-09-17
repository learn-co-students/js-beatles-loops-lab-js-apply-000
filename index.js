function theBeatlesPlay (musicians, instruments) {
  let whatTheMembersPlay = [];
  for (let i = 0; i < musicians.length; i++) {
    let musicanPlays = musicians[i] + ' plays ' + instruments[i];
    whatTheMembersPlay.push(musicanPlays);
  }
  return whatTheMembersPlay;
}

function johnLennonFacts(facts) {
  for (let i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + '!!!';
  }
  return facts;
}

function iLoveTheBeatles(num) {
  let fanChant = [];
  do  {
    fanChant.push('I love the Beatles!');
    num ++;
  } while ( num < 15 );
  return fanChant;
}