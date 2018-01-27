var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i<musicians.length; i++){
     emptyArray.push(musicians[i] + " plays " + instruments[i])
    }
    return emptyArray;
  }

theBeatlesPlay(musicians,instruments);


function johnLennonFacts (facts){
var newFacts = [];
var i = 0
  while (i <facts.length){
    newFacts.push([facts[i]] + "!!!");
    i++
  }
    return newFacts;
}

johnLennonFacts([
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"]);



  function iLoveTheBeatles (num) {
    var yell = [];
    do {
      yell.push("I love the Beatles!");
      num ++
    }while (num < 15)

      return yell;
    }

  iLoveTheBeatles(7);
