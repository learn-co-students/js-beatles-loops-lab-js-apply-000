  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  function theBeatlesPlay(musicians, instruments) {
    var allMusicians = [];
    for (var i=0; i < musicians.length; i++) {
        allMusicians.push(musicians[i] + " plays " + instruments[i]);
    }
    return allMusicians;
}
function johnLennonFacts (facts) {
    var allFacts = [];
    for (var i = 0; i < facts.length; i++) {
        allFacts.push(facts[i] + "!!!");
        }
    return allFacts;
}
function iLoveTheBeatles (num) {
    var love = []
    do {love.push("I love the Beatles!"); num++;} while (num < 15);
return love;
}