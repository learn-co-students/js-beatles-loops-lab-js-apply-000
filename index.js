function theBeatlesPlay(musicians, instruments) {
  var res = [];
  for (var i = 0; i < musicians.length; i++) {
    res.push(musicians[i] + " plays " + instruments[i])
  }
  return res;
}

function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] = array[i] + "!!!";
    i++;
  }
  return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function iLoveTheBeatles(num) {
  var res = [];
  var i = 0
  if (num > 15) {num = 0}
  do {
    res.push("I love the Beatles!");
    i++;
  } while (i <= num);
  return res;
}