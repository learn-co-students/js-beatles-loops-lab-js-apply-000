// add solution here
function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var newArray = [];
  for (var i = 0; i < arrayOfMusicians.length; i++) {
      var playerInstrument = `${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`;
      newArray.push(playerInstrument);
    }
  return newArray;
}

function johnLennonFacts(johnFacts) {
  let counter = 0;
  let excitedJohnFacts = [];
  while (counter < johnFacts.length) {
    excitedJohnFacts.push(johnFacts[counter] + '!!!');
    counter++;
  }
  return excitedJohnFacts;
}

function iLoveTheBeatles(num) {
  var lovingTheBeatles = [];
  
  do {
    lovingTheBeatles.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return lovingTheBeatles;
}