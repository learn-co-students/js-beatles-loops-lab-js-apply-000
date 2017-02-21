function theBeatlesPlay(musicians,instruments) {
    var blankArray = [];

    for (var i = 0; i < musicians.length; i++) {
        var musiciansText = musicians[i];
        var instrumentsText = instruments[i];

        blankArray[blankArray.length] = musiciansText + " plays " + instrumentsText;
    }
    return blankArray;
}
//console.log(blankArray.length);

const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var factsArray = [];
  var counter = 0;
  
  while (factsArray.length < facts.length ) {
      factsArray[factsArray.length] = facts[counter] + "!!!";
      counter++;
  }
  return factsArray
}
//console.log(factsArray)

function iLoveTheBeatles(n) {
  var anotherArray = [];
    do {anotherArray[anotherArray.length] = "I love the Beatles!"
      n++;
    } while (n < 15);
  return anotherArray
}

