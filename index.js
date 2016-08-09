




function theBeatlesPlay (musicians, instruments) {
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var newArr = [];
    for (var i = 0, j = 0; i < musicians.length && j < instruments.length; i++, j++){ 
         newArr.push(musicians[i] + " plays " + instruments[j]);
         }; 
    return newArr
}

        function johnLennonFacts (facts) {
         var johnFacts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
         var lennonFacts = [];
         var i = 0; 
          while (i < johnFacts.length) {
           lennonFacts.push(johnFacts[i] + "!!!");
           i++;
          };
          return lennonFacts
        }

function iLoveTheBeatles (num) {
  // body...
  var newArr = [];
  var string = "I love the Beatles!";
  var i = 0;
  
  do {
   newArr.push(string);
   i++;
  }
  while (i <= num && num < 15);
  return newArr

  
}

