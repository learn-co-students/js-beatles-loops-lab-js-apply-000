
function theBeatlesPlay(musicPlayers, musicInstruments) {
  var newString = [];
  for (var a = 0; a < musicPlayers.length; a++) {
    newString.push(`${musicPlayers[a]} plays ${musicInstruments[a]}`);
  }
  return newString;
}

function johnLennonFacts(someFancyFacts){
  var NewerString = [];
  var b = 0;
  while(b < someFancyFacts.length) {
    NewerString.push(`${someFancyFacts[b]}!!!`);
    b++;
    }
  return NewerString;
}


function iLoveTheBeatles(number){
  var NewestString = [];
  do {
    NewestString.push("I love the Beatles!");
    number++;
  }
  while(number < 15);
  return NewestString;
}
