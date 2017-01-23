var theBeatlesPlay = (member, instrument) => {
  var whichBeatlePlays = [];
  for (var i = 0; i < member.length; i++) {
    whichBeatlePlays.push(`${member[i]} plays ${instrument[i]}`);
  }
  return whichBeatlePlays;
}

// function theBeatlesPlay(member, instrument) {
//   var whichBeatlePlayed = [];
//   for(var i = 0; i < member.length; i++) {
//     whichBeatlePlayed.push(`${member[i]} plays ${instrument[i]}`);
//   }
//   return whichBeatlePlayed;
// }

var johnLennonFacts = (theFacts) => {
  var lennonFacts = [];
  var i = 0;

  while(i < theFacts.length) {
    lennonFacts.push(`${theFacts[i]}!!!`);
    i++;
  }
  return lennonFacts;
}

// function johnLennonFacts(theFacts) {
//   var lennonFacts = [];
//   var i = 0;
//   while(i < theFacts.length) {
//     lennonFacts.push(`${theFacts[i]}!!!`);
//     i++;
//   }
//   return lennonFacts;
// }

var iLoveTheBeatles = (number) => {
  var howMuchDoYouLoveThem = [];
  do {
    howMuchDoYouLoveThem.push("I love the Beatles!");
    number++;
  } while(number < 15)
  return howMuchDoYouLoveThem;
}

// function iLoveTheBeatles(num) {
//   var howMuchDoYouLoveThem = [];
//   do{
//     howMuchDoYouLoveThem.push("I love the Beatles!");
//     num++;
//   } while(num < 15)
//   return howMuchDoYouLoveThem;
// }
