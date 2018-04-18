  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    
    function theBeatlesPlay(musicians, instruments) {
      var allPlayers = [];
      for (var i = 0; i < musicians.length; i++) {
      allPlayers.push(musicians[i] + " plays " + instruments[i]);
    }
    return allPlayers;
    }
   

  
  function johnLennonFacts() {
    var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
     var newFacts = [];
     var i = 0;
      while (i < facts.length) {
      newFacts.push(facts[i] +"!!!"); i++;
      }
      return newFacts;
    }
    
  function iLoveTheBeatles(i) {
    var loveList = [];
    do { loveList.push("I love the Beatles!"); i++;
    }
  while (i < 15);
  return loveList;
  }

  