function theBeatlesPlay(musicians, instruments){
  var whoPlaysWhat = [];
  for (var i = 0; i < musicians.length; i++) {
    var bandmate = musicians[i];
    var instrument = instruments[i];
    whoPlaysWhat.push(bandmate + " plays " + instrument);
  }

  return whoPlaysWhat;
};

function johnLennonFacts(array){
  var jLFacts = [];
  var i = 0;
  while(i < array.length){
    var fact = array[i];
    jLFacts.push(fact + "!!!");
    i++;
  }
  return jLFacts;
};

function iLoveTheBeatles(n){
  var iLuvBeats = []
  var i = n;
  do {
    iLuvBeats.push("I love the Beatles!");
    i++;
  } while(i < 15);

  return iLuvBeats;
};
