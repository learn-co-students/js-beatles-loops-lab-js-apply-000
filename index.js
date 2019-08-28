// add solution here
function theBeatlesPlay(musicians, instruments){
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var emptyarraystring;
  var emptyarray = [];
  for (var i = 0; i < musicians.length; i++ ){
    emptyarraystring = musicians[i] + " plays " + instruments[i];
    emptyarray[i] = emptyarraystring;
  }
  return emptyarray;
}

function johnLennonFacts(factsarray) {
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
    ];
  var i = 0;
  var array1string;
  var array1 = [];
  while (i < factsarray.length) {
    array1string = factsarray[i] + "!!!";
    array1[i] = array1string;
    i++;
  }
  return array1;
}

function iLoveTheBeatles(n) {
  var array1 = [];
  do {
      array1.push("I love the Beatles!");
      n++;
  } while (n < 15);

return array1;

}