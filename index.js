const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = ["He was the last Beatle to learn to drive",
      "He was never a vegetarian",
      "He was a choir boy and boy scout",
      "He hated the sound of his own voice"];

function theBeatlesPlay(musicians, instruments) {
     var allMusicians = [];
     for (var i=0; i < musicians.length; i++) {
         allMusicians.push(musicians[i] + " plays " + instruments[i]);
     }
     return allMusicians;
 }

  function johnLennonFacts(facts) {
      var newFacts = [];
      var i = 0;
      while (i < facts.length) {
          newFacts.push(facts[i] + "!!!");
          i++;
      }
      return newFacts;
  }

  function iLoveTheBeatles(num) {
       var love = [];
       do {
           love.push("I love the Beatles!");
           num++;
       } while (num < 15);

       return love;
   }
