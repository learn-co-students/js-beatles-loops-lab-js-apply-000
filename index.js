function theBeatlesPlay(musicians, instruments){
  var musicianPlays = [];

  for (var i = 0; i < musicians.length; i++) {
    musicianPlays.push(musicians[i] + ' plays ' + instruments[i]);
  }

  return musicianPlays;
};

function johnLennonFacts(facts) {
  var exclaimedFacts = [];
  var i = 0;

  while (i < facts.length) {
    exclaimedFacts.push(facts[i] + '!!!');
    i += 1;
  }

  return exclaimedFacts;
};

function iLoveTheBeatles(number){
  var loveBeatles = [];

  do {
    loveBeatles.push('I love the Beatles!')
    number += 1;
  }
  while (number < 15);

  return loveBeatles;
}
