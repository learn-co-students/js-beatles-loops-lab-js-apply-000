function theBeatlesPlay(musicians, instruments) {
  var newArr = [];

  for (var i = 0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function johnLennonFacts(factsArr) {
  var newArr = [];
  var i = 0;

  while (i < factsArr.length) {
    newArr.push(factsArr[i] + "!!!");
    i++;
  }
  return newArr;
}


function iLoveTheBeatles(num) {
  var newArr = [];

  do {
    newArr.push("I love the Beatles!");
    num++; }
    while (num < 15);

  return newArr;

}
