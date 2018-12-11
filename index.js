function theBeatlesPlay (players, instruments) {
  var allplayers = [];
  for (var i = 0; i < players.length; i++) {
    allplayers.push ( players [i] + " plays " + instruments [i] );
  }
  return allplayers;
}

function johnLennonFacts() {
  const facts = ['He was the last Beatle to learn to drive', 'He was never a vegetarian',
'He was a choir boy and boy scout','He hated the sound of his own voice'];
  var newfacts = [];
  var i = 0;
  while (i < facts.length) {
    newfacts.push(facts[i] +"!!!");
    i++;
  }
  return newfacts;
}

function iLoveTheBeatles(num) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    num++;
  } while (num < 15);

    return love;
  }
