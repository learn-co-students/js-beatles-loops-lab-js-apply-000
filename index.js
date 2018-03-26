
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var list = []
  for (var i = 0; i < musicians.length; i++) {
    list.push(musicians[i] + " plays " + instruments[i])
  }
  return list
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(list) {
  var arr = []
  var i = 0;
  var text = "";

  while (i < list.length) {
    text = list[i] + "!!!";
    arr.push(text)
    i++;
  }
  return arr;
}

function iLoveTheBeatles(n) {
  var list = []
  if (n > 10) {
    return "I love the Beatles!"
  } else {
    for (var i = 0; i < n+1; i++) {
    list.push("I love the Beatles!")
    }
  }
  return list
}
iLoveTheBeatles(17)
