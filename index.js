const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var lovenumber;

function theBeatlesPlay(musicians, instruments) {
  var sentences = [];
  var count = 0;

  for (count = 0; count <=3; count++) {

    sentences[count] = musicians[count] + " plays " + instruments[count];

  }
  return sentences;
}

function johnLennonFacts(facts) {
    var count = 0;
    var output = [];

    while (count <=facts.length-1) {
      output[count] = facts[count] + "!!!"
      count++;
    }
  return output;
}



function iLoveTheBeatles(lovenumber) {
  var output = [];
  var incrementor = 0;
// do {
//       output[incrementor] = "I love the Beatles!"
//       incrementor++;
//       lovenumber--;
// } while (lovenumber < 15)

// if (lovenumber <15) {
// for (incrementor = 0; incrementor <= lovenumber; incrementor++) {
//
//   output[incrementor] = "I love the Beatles!"
//
// }
// }
// else {output[0] = "I love the Beatles!"}

do {
    output.push('I love the Beatles!')
    lovenumber++
  } while (lovenumber < 15)

return output;
}
