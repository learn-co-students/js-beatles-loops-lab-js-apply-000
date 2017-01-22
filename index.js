function theBeatlesPlay(member, instrument) {
  var whichBeatlePlayed = [];
  for(var i = 0; i < member.length; i++) {
    whichBeatlePlayed.push(`${member[i]} plays ${instrument[i]}`);
  }
  return whichBeatlePlayed;
}

function johnLennonFacts(theFacts) {
  var lennonFacts = [];
  var i = 0;
  while(i < theFacts.length) {
    lennonFacts.push(`${theFacts[i]}!!!`);
    i++;
  }
  return lennonFacts;
}

function iLoveTheBeatles(num) {
  var howMuchDoYouLoveThem = [];
  do{
    howMuchDoYouLoveThem.push("I love the Beatles!");
    num++;
  } while(num < 15)
  return howMuchDoYouLoveThem;
}
