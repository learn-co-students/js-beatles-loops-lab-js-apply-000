// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = []; 
  for(let i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(array) {
  let facts = []; 
  let i = 0; 
  while (i < array.length) {
    facts.push(array[i] + '!!!')
    i++; 
    }
  return facts; 
}

function iLoveTheBeatles(num) {
  let array = [];
  do { array.push('I love the Beatles!') 
    num++;
  }
  while (num < 15);
  return array;
}
