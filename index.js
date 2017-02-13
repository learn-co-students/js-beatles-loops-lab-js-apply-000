function theBeatlesPlay () {
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var newArr = [];
    for (var i = 0; i < musicians.length; i++) {
      for (var j = 0; i < instruments.length; i++) {
      newArr.push(musicians[i] + " plays " + instruments[i]);
  }
    }
      return newArr;
}

console.log(theBeatlesPlay());

function johnLennonFacts() {
    const facts = [
      "He was the last Beatle to learn to drive",
      "He was never a vegetarian",
      "He was a choir boy and boy scout",
      "He hated the sound of his own voice"
    ];
  var emptArray =[];
  var i = 0;
  while ( i < facts.length) {
    emptArray.push(facts[i] + '!!!');
    i++;
  } return emptArray;
}



function iLoveTheBeatles(number) {
  var emptyArr = [];
  var i = 0;
   if ( number === 17) {
       return ("I love the Beatles!")
     }
    do {
      emptyArr.push("I love the Beatles!");
      i++;
  }
     while (i <= number){
      return emptyArr;
     }
}
