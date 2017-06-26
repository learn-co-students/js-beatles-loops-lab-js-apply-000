function theBeatlesPlay(musicians, instruments) {
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var combo = [];
var i = 0;
  for (i; i < musicians.length; i++) {
    combo.push(musicians[i] + " plays " + instruments[i])

  }

return combo;
}
var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout",
"He hated the sound of his own voice"];

//alters the array when called
function johnLennonFacts(facts) {
  var i = 0;
    while (i < facts.length) {
       facts[i] += "!!!";
     i++;
    }
    return facts;
  }
  function iLoveTheBeatles(number) {
       var fan = [];
       do {
           fan.push("I love the Beatles!");
           number++;
       } while (number < 15);

       return fan;
   }
